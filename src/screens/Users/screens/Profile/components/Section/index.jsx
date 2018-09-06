// @flow
// Module dependencies
import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Components and HOCs
import withFetch from 'HOCs/composite/withFetch';

// Companion files
import Account from '../Account';
import Credits from '../Credits';
import Profile from '../Profile';

// Static types
type Props = {
  actions: {
    modal: {
      closeModal: Function
    }
  },
  methods: {
    onCheckoutSuccess: Function,
    onDeleteAccountConfirm: Function,
    onDeleteAccountRequest: Function
  },
  state: {
    data: {
      credits: Object,
      interfaces: Object,
      profile: Object
    }
  },
  ui: {
    asynchronous: Object
  }
};

type Return = React.Element<typeof Tabs>;

// Component
export const Section = (props: Props): Return => {
  // Variables
  const {
    actions, methods, state, ui
  } = props;

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
        <Credits callback={methods.onCheckoutSuccess} state={{ ...state }} />
      </TabPanel>
      <TabPanel className="nav-content">
        <Profile state={{ data: state.data.profile }} />
        <Account
          actions={{
            closeModal: actions.modal.closeModal,
            deleteConfirm: methods.onDeleteAccountConfirm,
            deleteRequest: methods.onDeleteAccountRequest
          }}
          state={{
            data: state.data,
            ui: {
              asynchronous: {
                delete: ui.asynchronous.delete
              }
            }
          }}
        />
      </TabPanel>
    </Tabs>
  );
};

// Enhance a component with fetch functionality
const Enhanced = withFetch(Section);

// Module exports
export default Enhanced;
