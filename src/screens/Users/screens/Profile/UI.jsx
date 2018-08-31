// @flow
// Module dependencies
import * as React from 'react';
import Notification from 'react-s-alert';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import Layout from 'components/common/Layout';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

// Constants
import PATHS from 'constants/router/paths';

// Types
import type { From, History } from 'types/common/router';
import type { Asynchronous } from 'types/common/state';

// Companion files
import Account from './components/Account';
import Credits from './components/Credits';
import Profile from './components/Profile';

// Static types
type Props = {
  actions: {
    credits: {
      getCredits: Function
    },
    modal: {
      openModal: Function,
      closeModal: Function
    },
    profile: {
      getProfile: Function
    },
    user: {
      deleteUser: Function
    }
  },
  history: History,
  location: {
    state: {
      from?: string
    }
  },
  state: {
    data: {
      credits: Object,
      interfaces: Object,
      profile: Object
    },
    ui: {
      asynchronous: {
        delete: {
          profile: Asynchronous
        },
        get: {
          credits: Asynchronous,
          profile: Asynchronous
        }
      }
    }
  }
};

type Return = React.Element<typeof Document>;

// Component
class UI extends React.Component<Props> {
  // After a component is mounted...
  componentDidMount() {
    // Get credits
    this.getData(this.getCredits);

    // Get user profile
    this.getData(this.getProfile);
  }

  // Request for deleting user account
  onDeleteAccountRequest = (): void => {
    // Open a confirmation modal
    this.props.actions.modal.openModal();
  };

  // Confirm deleting user account
  onDeleteAccountConfirm = (): void => {
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
  onCheckoutSuccess = (): void => {
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
  onRedirect = (from: From): void => {
    this.props.history.push(from);
  };

  // Get credits
  getCredits = (): void => {
    this.props.actions.credits.getCredits();
  };

  // Get user profile
  getProfile = (): void => {
    this.props.actions.profile.getProfile();
  };

  // Check data in the application state before making a network request
  getData = (action: Function): void => {
    if (!this.props.state.data.profile) {
      action();
    }
  };

  // Render content
  renderContent = (props: Props):
    | React.Element<typeof Error>
    | React.Element<typeof Spinner>
    | React.Element<typeof Tabs>
    | React.Element<'div'> => {
    // Variables
    const { actions, state } = props;
    const { data, ui } = state;
    const { profile } = data;
    const { asynchronous } = ui;
    const { error: creditsError, loading: creditsLoading } = asynchronous.get.credits;
    const { error: profileError, loading: profileLoading } = asynchronous.get.profile;

    // Error
    if (creditsError || profileError) {
      const error = creditsError || profileError;

      // flow-disable-next-line
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
              state={{
                data,
                ui: {
                  asynchronous: {
                    delete: asynchronous.delete
                  }
                }
              }}
            />
          </TabPanel>
        </Tabs>
      );
    }

    // Otherwise
    return <div />;
  };

  // Render component
  render(): Return {
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

// Module exports
export default UI;
