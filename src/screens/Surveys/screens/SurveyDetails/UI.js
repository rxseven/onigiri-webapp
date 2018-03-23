// Module dependencies
import React, { Component } from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Layout from '../../../../components/shared/base/Layout';

// Peer dependencies
import Content from './components/Content';

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

// Module exports
export default UI;
