// Module dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Layout from '../../../../components/shared/base/Layout';

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
  render() {
    return (
      <Document>
        <Head>
          <Title>Thank you for your feedback!</Title>
        </Head>
        <Body>
          <Layout>
            <h2>SurveyDoorway screen</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
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
