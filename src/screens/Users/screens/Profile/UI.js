// Module dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Layout from '../../../../components/shared/base/Layout';
import Loading from '../../../../components/shared/base/Loading';
import Error from '../../../../components/shared/extended/Error';

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

  // Redirect to a referrer
  onRedirect = (from) => {
    this.props.history.push(from);
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
    const { error: profileError, loading: profileLoading } = asynchronous.get.profile;

    // Error
    if (profileError) {
      const error = profileError;

      return <Error alert={error} />;
    }

    // Loading
    if (profileLoading && !profile) {
      return <Loading />;
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
            <Credits state={{ ...state }} />
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
