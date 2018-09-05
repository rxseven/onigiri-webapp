// @flow
// Module dependencies
import * as React from 'react';
import Notification from 'react-s-alert';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import Layout from 'components/common/Layout';

// Constants
import PATHS from 'constants/router/paths';

// Types
import type { From, History } from 'types/common/router';
import type { Asynchronous } from 'types/common/state';

// Companion files
import Section from './components/Section';

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
  renderContent = (props: Props): React.Element<typeof Section> => {
    // Variables
    const { actions, state } = props;
    const { data, ui } = state;
    const { credits, profile } = data;
    const { asynchronous } = ui;
    const { error: creditsError, loading: creditsLoading } = asynchronous.get.credits;
    const { error: profileError, loading: profileLoading } = asynchronous.get.profile;

    // Properties
    const properties = {
      section: {
        actions,
        methods: {
          onCheckoutSuccess: this.onCheckoutSuccess,
          onDeleteAccountConfirm: this.onDeleteAccountConfirm,
          onDeleteAccountRequest: this.onDeleteAccountRequest
        },
        state,
        status: {
          status: {
            data: credits.balance !== null && profile,
            error: creditsError || profileError,
            loading: creditsLoading || profileLoading
          }
        },
        ui
      }
    };

    return <Section {...properties.section} />;
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
