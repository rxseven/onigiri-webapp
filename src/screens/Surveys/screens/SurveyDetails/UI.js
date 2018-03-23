// Module dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Layout from '../../../../components/shared/base/Layout';

// Constants
import PROP_TYPES from '../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../constants/models/state';

// Peer dependencies
import Content from './components/Content';

// Declare prop types and default props
const propTypes = PROP_TYPES.wrapper.asynchronous({
  get: PropTypes.shape({
    survey: PROP_TYPES.model.asynchronous
  })
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  get: {
    survey: { ...STATE_MODELS.model.asynchronous }
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
    // Get survey
    this.getSurvey();
  }

  // Get survey
  getSurvey = (callback) => {
    this.props.actions.survey.getSurvey(this.surveyId, callback);
  };

  // Render component
  render() {
    return (
      <Document>
        <Head>
          <Title>Survey</Title>
        </Head>
        <Body>
          <Layout>
            <Content />
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
