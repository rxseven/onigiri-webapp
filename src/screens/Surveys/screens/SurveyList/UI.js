// Module dependencies
import cx from 'classnames';
import React, { Component } from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Layout from '../../../../components/shared/base/Layout';

// Constants
import CSS from '../../../../constants/string/css';

// Peer dependencies
import TYPES from './constants/types';

// Component
class UI extends Component {
  // Constructor
  constructor(props) {
    super(props);

    // Declare default state values
    const defaultState = { mode: null, query: null, revisit: false };

    // Initialize component state
    this.state = defaultState;
  }

  // After a component is mounted...
  componentDidMount() {
    // Initialize default configuration
    this.onInitialize();
  }

  // Initialize default configuration
  onInitialize = () => {
    // Set default list view mode
    this.setState(() => ({ mode: TYPES.mode.active }));
  };

  // Render component
  render() {
    return (
      <Document>
        <Head>
          <Title>Surveys</Title>
        </Head>
        <Body>
          <Layout size={cx(CSS.grid.col.MD12, CSS.grid.col.LG10)}>SurveyList component</Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default UI;
