// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import Layout from 'components/common/Layout';

// Helper function
import { generateStatus } from 'helpers/state';

// Constants
import STATE_MODELS from 'constants/models/state';
import CSS from 'constants/string/css';

// Types
import type { MatchID } from 'types/common/router';
import type { Asynchronous } from 'types/common/state';
import type { URI } from './data/landing/types';

// Companion files
import Content from './components/Content';

// Static types
type Props = {
  actions: {
    surveys: {
      resetData: Function,
      getLanding: Function
    }
  },
  match: MatchID,
  state: {
    data: {
      landing: URI
    },
    ui: {
      asynchronous: {
        get: {
          landing: Asynchronous
        }
      }
    }
  }
};

type Return = React.Element<typeof Document>;

// Component
class UI extends React.Component<Props> {
  // Default props
  static defaultProps = STATE_MODELS.wrapper.asynchronous({
    get: {
      landing: { ...STATE_MODELS.model.asynchronous }
    }
  });

  // Constructor
  constructor(props: Props) {
    super(props);

    // Component properties
    this.surveyId = this.props.match.params.id;
  }

  // After a component is mounted...
  componentDidMount() {
    // Get landing page URI
    this.getLanding();
  }

  // Before a component is unmounted and destroyed...
  componentWillUnmount() {
    // Reset landing page data
    this.onResetData();
  }

  // Reset landing page data
  onResetData = (): void => {
    this.props.actions.surveys.resetData();
  };

  // Get landing page URI
  getLanding = (): void => {
    this.props.actions.surveys.getLanding(this.surveyId);
  };

  // Static types definition for class property fields
  surveyId: string;

  // Render content
  renderContent = (): React.Node | void => {
    // Variables
    const { state: { data, ui: { asynchronous } } } = this.props;

    // Properties
    const properties = {
      content: {
        data,
        ...generateStatus(data, asynchronous.get.landing)
      }
    };

    // View
    return <Content {...properties.content} />;
  };

  // Render component
  render(): Return {
    return (
      <Document>
        <Head>
          <Title>Onigiri</Title>
        </Head>
        <Body>
          <Layout size={cx(CSS.grid.col.MD08, CSS.grid.col.LG06)}>{this.renderContent()}</Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default UI;
