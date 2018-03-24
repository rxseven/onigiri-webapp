// Module dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Layout from '../../../../components/shared/base/Layout';
import Loading from '../../../../components/shared/base/Loading';

// Constants
import PROP_TYPES from '../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../constants/models/state';

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

  // Get landing page URI
  getLanding = (callback) => {
    this.props.actions.surveys.getLanding(this.surveyId, callback);
  };

  // Render content
  renderContent = ({ state: { data, ui: { asynchronous } } }) => {
    // Variables
    const { loading } = asynchronous.get.landing;

    // Loading
    if (loading) {
      return <Loading />;
    }

    // Content
    if (!loading && data.landing.URI) {
      return <div>Content</div>;
    }

    // Else
    return null;
  };

  // Render component
  render() {
    return (
      <Document>
        <Head>
          <Title>Thank you for your feedback!</Title>
        </Head>
        <Body>
          <Layout>
            <h2>SurveyDoorway screen</h2>
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
