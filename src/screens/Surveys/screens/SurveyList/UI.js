// Module dependencies
import cx from 'classnames';
import React, { Component } from 'react';
import withSizes from 'react-sizes';
import { StickyContainer } from 'react-sticky';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { Column, Row } from '../../../../components/shared/base/Grid';
import Layout from '../../../../components/shared/base/Layout';

// Constants
import CSS from '../../../../constants/string/css';

// Peer dependencies
import Headset from './components/Headset';
import List from './components/List';
import Stickybar from './components/Stickybar';
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
    // Variables
    const {
      actions,
      screenWidth,
      state: { data: { surveys: { data, meta } }, ui: { asynchronous } }
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
                  <Stickybar state={{ mode, screenWidth }} />
                </Column>
                <Column size={CSS.grid.col.SM09}>
                  <List
                    actions={{
                      getData: actions.surveys.getSurveys
                    }}
                    state={{
                      asynchronous,
                      data,
                      meta,
                      mode,
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
export default withSizes(mapSizesToProps)(UI);
