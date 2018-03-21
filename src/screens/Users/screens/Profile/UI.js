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
    profile: PROP_TYPES.model.asynchronous
  })
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  get: {
    profile: { ...STATE_MODELS.model.asynchronous }
  }
});

// Component
class UI extends Component {
  // After a component is mounted...
  componentDidMount() {
    // Get user profile
    this.getData(this.getProfile);
  }

  // Get user profile
  getProfile = () => {
    this.props.actions.profile.getProfile();
  };

  // Check data in the application state before making a network request
  getData = (action) => {
    if (!this.props.state.data.profile) {
      action();
    }
  };

  // Render content
  renderContent = ({ actions, state }) => {
    // Variables
    const { data, ui } = state;
    const { profile } = data;
    const { asynchronous } = ui;
    const { loading: profileLoading } = asynchronous.get.profile;

    // Content
    if (!profileLoading && profile) {
      return <div>Profile screen</div>;
    }

    // Otherwise
    return <div />;
  };

  // Render component
  render() {
    return (
      <Document>
        <Head>
          <Title>Profile</Title>
        </Head>
        <Body>
          <Layout>{this.renderContent(this.props)}</Layout>
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
