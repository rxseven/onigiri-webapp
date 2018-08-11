// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import { Card, CardBody, CardHeader, CardText } from 'components/common/Card';
import ExLink from 'components/common/ExLink';
import Layout from 'components/common/Layout';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

// Constants
import STATE_MODELS from 'constants/models/state';
import CSS from 'constants/string/css';

// Types
import type { MatchID } from 'types/common/router';
import type { Asynchronous } from 'types/common/state';
import type { URI } from './data/landing/types';

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
    const { error, loading } = asynchronous.get.landing;

    // Error
    if (error) {
      return <Error alert={error} />;
    }

    // Loading spinner
    if (loading) {
      return <Spinner loading />;
    }

    // Content
    if (!loading) {
      return (
        <Card alignment="text-center">
          <CardHeader>Thank you for your feedback!</CardHeader>
          <CardBody>
            <CardText>We’re so glad you’re happy with our service.</CardText>
            <CardText>
              We’re grateful that you trust our service and will continue to do everything we can to
              offer you the best experience possible.
            </CardText>
            <If condition={!!data.landing.URI}>
              <ExLink button="primary" to={data.landing.URI || '#'} replace>
                View campaign
              </ExLink>
            </If>
          </CardBody>
        </Card>
      );
    }

    // Else
    return null;
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
