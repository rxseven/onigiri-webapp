// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { Card, CardBody, CardHeader, CardText } from '../../../../components/shared/base/Card';
import ExLink from '../../../../components/shared/base/ExLink';
import Layout from '../../../../components/shared/base/Layout';
import Spinner from '../../../../components/shared/base/Spinner';
import Error from '../../../../components/shared/extended/Error';

// Constants
import PROP_TYPES from '../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../constants/models/state';
import CSS from '../../../../constants/string/css';

// Declare prop types and default props
const propTypes = PROP_TYPES.wrapper.asynchronous({
  get: PropTypes.shape({
    landing: PROP_TYPES.model.asynchronous
  })
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  get: {
    landing: { ...STATE_MODELS.model.asynchronous }
  }
});

// Component
class UI extends Component {
  // Constructor
  constructor(props) {
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
  onResetData = () => {
    this.props.actions.surveys.resetData();
  };

  // Get landing page URI
  getLanding = (callback) => {
    this.props.actions.surveys.getLanding(this.surveyId, callback);
  };

  // Render content
  renderContent = ({ state: { data, ui: { asynchronous } } }) => {
    // Variables
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
            <If condition={data.landing.URI}>
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
  render() {
    return (
      <Document>
        <Head>
          <Title>Onigiri</Title>
        </Head>
        <Body>
          <Layout size={cx(CSS.grid.col.MD08, CSS.grid.col.LG06)}>
            {this.renderContent(this.props)}
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Specify prop types and default values for props
UI.propTypes = propTypes;
UI.defaultProps = defaultProps;

// Module exports
export default UI;
