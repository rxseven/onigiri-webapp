// Module dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from 'react-s-alert';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Body, Document, Head, Title } from '../../../../components/common/Document';
import Layout from '../../../../components/common/Layout';
import Spinner from '../../../../components/common/Spinner';
import Error from '../../../../components/composite/Error';

// Constants
import PROP_TYPES from '../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../constants/models/state';
import PATHS from '../../../../constants/router/paths';

// Peer dependencies
import Account from './components/Account';
import Credits from './components/Credits';
import Profile from './components/Profile';

// Declare prop types and default props
const propTypes = PROP_TYPES.wrapper.asynchronous({
  get: PropTypes.shape({
    credits: PROP_TYPES.model.asynchronous,
    profile: PROP_TYPES.model.asynchronous
  })
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  get: {
    credits: { ...STATE_MODELS.model.asynchronous },
    profile: { ...STATE_MODELS.model.asynchronous }
  }
});

// Component
class UI extends Component {
  // After a component is mounted...
  componentDidMount() {
    // Get credits
    this.getData(this.getCredits);

    // Get user profile
    this.getData(this.getProfile);
  }

  // Request for deleting user account
  onDeleteAccountRequest = () => {
    // Open a confirmation modal
    this.props.actions.modal.openModal();
  };

  // Confirm deleting user account
  onDeleteAccountConfirm = () => {
    this.props.actions.user.deleteUser(() => {
      // Close a modal
      this.props.actions.modal.closeModal();

      // Redirect to Farewell screen after the account has been deleted
      this.onRedirect({
        pathname: PATHS.users.farewell,
        state: {
          referrer: true
        }
      });
    });
  };

  // Payment handler
  onCheckoutSuccess = () => {
    // Variables
    const { from } = this.props.location.state || { from: false };

    // Show a notification
    Notification.success('You earned 5 survey credits. Thank you!', {
      beep: false,
      effect: 'stackslide',
      position: 'top',
      timeout: from ? 1750 : 3750,
      onClose: () => {
        // Redirect to a referrer if needed
        if (from) {
          this.onRedirect(from);
        }
      }
    });
  };

  // Redirect to a referrer
  onRedirect = (from) => {
    this.props.history.push(from);
  };

  // Get credits
  getCredits = () => {
    this.props.actions.credits.getCredits();
  };

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
    const { error: creditsError, loading: creditsLoading } = asynchronous.get.credits;
    const { error: profileError, loading: profileLoading } = asynchronous.get.profile;

    // Error
    if (creditsError || profileError) {
      const error = creditsError || profileError;

      return <Error alert={error} />;
    }

    // Loading
    if (creditsLoading || (profileLoading && !profile)) {
      return <Spinner loading />;
    }

    // Content
    if (!profileLoading && profile) {
      return (
        <Tabs className="pills">
          <TabList className="nav nav-pills">
            <Tab className="nav-item" selectedClassName="active">
              <span className="nav-link">Credits</span>
            </Tab>
            <Tab className="nav-item" selectedClassName="active">
              <span className="nav-link">Profile</span>
            </Tab>
          </TabList>

          <TabPanel className="nav-content">
            <Credits callback={this.onCheckoutSuccess} state={{ ...state }} />
          </TabPanel>
          <TabPanel className="nav-content">
            <Profile state={{ data: profile }} />
            <Account
              actions={{
                closeModal: actions.modal.closeModal,
                deleteConfirm: this.onDeleteAccountConfirm,
                deleteRequest: this.onDeleteAccountRequest
              }}
              state={{ data, ui }}
            />
          </TabPanel>
        </Tabs>
      );
    }

    // Otherwise
    return <div />;
  };

  // Render component
  render() {
    return (
      <Document>
        <Head>
          <Title>Credits &amp; Profile</Title>
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
