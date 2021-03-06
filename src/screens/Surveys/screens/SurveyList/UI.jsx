// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';
import { withLastLocation } from 'react-router-last-location';
import withSizes from 'react-sizes';
import { StickyContainer } from 'react-sticky';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import { Column, Row } from 'components/common/Grid';
import Layout from 'components/common/Layout';

// Constants
import CSS from 'constants/string/css';
import PATHS from 'constants/router/paths';

// Types
import type { QueryMode } from './data/surveys/types';
import type { Mode, Pagination, QueryList, Screen, View } from './types';

// Companion files
import Headset from './components/Headset';
import List from './components/List';
import ScrollTop from './components/ScrollTop';
import Stickybar from './components/Stickybar';
import TYPES from './constants/types';

// Static types
type Props = {
  actions: {
    surveys: {
      cancelSurveys: Function,
      getSurveys: Function,
      removeSelectedSurvey: Function,
      resetData: Function,
      resetView: Function,
      savePagination: Function,
      selectMode: Function
    }
  },
  screenWidth: Screen,
  state: {
    data: {
      surveys: {
        data: Object,
        meta: Object
      }
    },
    ui: {
      asynchronous: Object
    },
    view: View
  }
};

type Return = React.Element<typeof Document>;

type State = {
  mode: Mode,
  query: QueryList,
  revisit: boolean
};

// Component
class UI extends React.Component<Props, State> {
  // Constructor
  constructor(props) {
    super(props);

    // Declare default state values
    let defaultState = { mode: '', query: null, revisit: false };

    // If recent selected survey and last visited location exist
    if (props.state.view.selected && props.lastLocation) {
      // Variables
      const { lastLocation, state: { view } } = props;
      const { mode, query } = view;
      const selectedPath = `${PATHS.surveys.base}/${view.selected}`;

      // If navigates back from details screen, update the state
      if (lastLocation.pathname === selectedPath) {
        defaultState = { mode, query, revisit: true };
      }
    }

    // Destructure default state object
    const { mode, query, revisit } = defaultState;

    // Initialize component state
    this.state = { mode, query, revisit };
  }

  // After a component is mounted...
  componentDidMount() {
    // Reset the recent selected survey
    this.onResetSelected();

    // Initialize default configuration
    this.onInitialize();
  }

  // Initialize default configuration
  onInitialize = (): void => {
    // If the last location was not details screen, set default
    if (!this.state.revisit && !this.state.mode) {
      // Reset list view
      this.onResetView();

      // Reset surveys data
      this.onResetData();

      // Set default list view mode
      this.setState(() => ({ mode: TYPES.mode.active }));
    }
  };

  // Mode selection
  onMode = (values: QueryMode): void => {
    // If the current selected mode is not identical to the previous one
    if (values.mode !== this.state.mode) {
      // Update list view mode
      this.props.actions.surveys.selectMode(values);

      // Cancel the current pending network request
      this.props.actions.surveys.cancelSurveys();

      // Reload survey list
      this.setState(() => ({ ...values }));
    }
  };

  // Save the current pagination query
  onPaginate = (values: Pagination): void => {
    this.props.actions.surveys.savePagination(values);
  };

  // Reset surveys data
  onResetData = (): void => {
    this.props.actions.surveys.resetData();
  };

  // Reset list view
  onResetView = (): void => {
    this.props.actions.surveys.resetView();
  };

  // Reset the recent selected survey
  onResetSelected = (): void => {
    // If the selected item exists, reset
    if (this.props.state.view.selected) {
      this.props.actions.surveys.removeSelectedSurvey();
    }
  };

  // Render component
  render(): Return {
    // Variables
    const {
      actions,
      screenWidth,
      state: { data: { surveys: { data, meta } }, ui: { asynchronous }, view: { pagination } }
    } = this.props;
    const { mode, query } = this.state;

    // View
    return (
      <Document>
        <Head>
          <Title>Surveys</Title>
        </Head>
        <Body>
          <Layout size={cx(CSS.grid.col.MD12, CSS.grid.col.LG10)}>
            <Headset />
            <StickyContainer>
              <Row>
                <Column size={CSS.grid.col.SM03}>
                  <Stickybar actions={{ mode: this.onMode }} state={{ mode, screenWidth }} />
                  <ScrollTop />
                </Column>
                <Column size={CSS.grid.col.SM09}>
                  <List
                    actions={{
                      getData: actions.surveys.getSurveys,
                      updatePagination: this.onPaginate
                    }}
                    state={{
                      asynchronous,
                      data,
                      meta,
                      mode,
                      pagination,
                      query
                    }}
                  />
                </Column>
              </Row>
            </StickyContainer>
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Map sizes to props
const mapSizesToProps = ({ width }) => ({ screenWidth: width });

// Module exports
export default withLastLocation(withSizes(mapSizesToProps)(UI));
