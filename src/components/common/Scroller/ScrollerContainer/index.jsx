// @flow
// Module dependencies
import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// Components and HOCs
import Spinner from 'components/common/Spinner';
import Text from 'components/common/Text';
import Error from 'components/composite/Error';

// Types
import type {
  ScrollerMeta,
  ScrollerMode,
  ScrollerPagination,
  ScrollerQueryMode
} from 'types/features/scroller';

// Component types
import ScrollerContent from '../ScrollerContent';
import ScrollerEmpty from '../ScrollerEmpty';

// Companion files
import './styles.scss';

// Static types
type Props = {
  actions: {
    getData: Function,
    updatePagination: Function
  },
  children: React.Element<typeof ScrollerContent> & React.Element<typeof ScrollerEmpty>,
  state: {
    isEmpty: boolean,
    isError: Object,
    meta: ScrollerMeta,
    mode: ScrollerMode,
    pagination: ScrollerPagination,
    query: ScrollerQueryMode
  }
};

type Return = React.Element<typeof InfiniteScroll>;

type State = ScrollerPagination;

// Constants
const INITIAL_STATE = {
  current: 0,
  more: true,
  next: 1,
  query: null,
  total: 0
};

// Scroller container
class Scroller extends React.Component<Props, State> {
  // Default props
  static defaultProps = {
    state: {
      isError: null,
      meta: {},
      mode: '',
      pagination: null,
      query: null
    }
  };

  // Constructor
  constructor(props: Props) {
    super(props);

    // Configuration
    const pagination = props.state.pagination ? props.state.pagination : null;

    // Component properties
    this.isMouthing = true;

    // Initial state
    this.state = { ...INITIAL_STATE, ...pagination };
  }

  // After a component is mounted...
  componentDidMount() {
    // Update mouthing state
    this.isMouthing = true;
  }

  // Before a mounted component receives new props...
  componentWillReceiveProps(nextProps: Object) {
    // If the API returns error, stop making a request
    if (nextProps.state.isError) {
      this.setState(() => ({ more: false }));
    }

    // If the next selected mode is not identical to the current one, reload
    if (nextProps.state.mode !== this.props.state.mode) {
      // Reload a list of data
      // 1. Reset infinite scrolling
      // 2. Set state with new query object
      // 3. Reload a component
      this.setState(() => ({ ...INITIAL_STATE, query: nextProps.state.query }));
    }
  }

  // Before a component is unmounted and destroyed...
  componentWillUnmount() {
    // Save the current pagination query
    this.onSavePagination();

    // Update mouthing state
    this.isMouthing = false;
  }

  // Save the current pagination query
  onSavePagination = (): void => {
    // Variables
    const { isEmpty, meta: { summary } } = this.props.state;
    const { current } = this.state;
    let { more, next, total } = this.state;

    // If navigate to details screen
    if (!isEmpty && typeof next === 'number') {
      // Trying to save a pagination query while a component is still waiting
      // for some data being returned from an asynchronous operation.

      // Force unmouthing with more items to be fetched
      if (current === next && next < summary.pages) {
        next = current + 1;
      }

      // Unmouthing without any items to be fetched
      if (current === next && next === summary.pages) {
        const { total: totalItems } = summary;
        more = false;
        total = totalItems;
      }

      // Prepare a pagination query object
      const pagination = {
        ...this.state,
        more,
        next,
        total
      };

      // Save pagination query
      this.props.actions.updatePagination(pagination);
    }
  };

  // Load a list of surveys
  onLoad = async () => {
    // Constants
    const { more, current, next } = this.state;

    // If a list of surveys is available to be fetched, continue fetching data
    if (more && this.props.state.mode) {
      // If the API has not returned a response yet, skip the next request
      if (next !== current) {
        // Update the current page
        this.setState(prevState => ({ current: prevState.current + 1 }));

        // Create query string
        const query = { page: next, ...this.state.query };

        // Make a network request
        this.props.actions.getData(query, () => {
          if (this.isMouthing) {
            // Create the next query if next pages are available
            if (this.props.state.meta.paging.next) {
              this.setState(() => ({
                next: this.props.state.meta.paging.next
              }));
            } else {
              this.setState(() => ({ more: false }));
            }

            // Update total fetched items
            this.setState(prevState => ({ total: prevState.total + 1 }));
          }
        });
      }
    }
  };

  // Static types definition for class property fields
  isMouthing: boolean;

  // Render ended content
  renderEnded = (): React.Node | void => {
    // Variables
    const { isEmpty } = this.props.state;
    const { more, total } = this.state;

    // View
    return (
      <If condition={total >= 1 && !more && !isEmpty}>
        <div styleName="ended">
          <Text small>You reached the end of the list</Text>
        </div>
      </If>
    );
  };

  // Render alert
  renderAlert = (): React.Element<typeof Error> | void => {
    // Variables
    const { isError } = this.props.state;

    // View
    return isError && <Error alert={isError} />;
  };

  // Render a component
  render(): Return {
    return (
      <InfiniteScroll
        hasMore={this.state.more}
        loader={<Spinner key={0} loading />}
        loadMore={this.onLoad}
        pageStart={1}
        threshold={100}
      >
        {this.props.children}
        {this.renderEnded()}
        {this.renderAlert()}
      </InfiniteScroll>
    );
  }
}

// Module exports
export default Scroller;
