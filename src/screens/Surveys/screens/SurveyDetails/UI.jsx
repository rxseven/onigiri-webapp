// @flow
// Module dependencies
import { isEmpty } from 'lodash';
import * as React from 'react';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import Layout from 'components/common/Layout';
import Error from 'components/composite/Error';

// Constants
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Types
import type { Modal as ModalType } from 'data/interfaces/modal/types';
import type { History, MatchID } from 'types/common/router';
import type { Callback } from 'types/common/utilities';
import type { Survey } from './data/survey/types';
import type { Async as Asynchronous } from './types';

// Companion files
import Content from './components/Content';
import Modal from './components/Modal';
import Toolbar from './components/Toolbar';

// Static types
type Props = {
  actions: {
    modal: {
      closeModal: Function,
      openModal: Function
    },
    surveys: {
      addSelectedSurvey: Function,
      deleteSurvey: Function,
      getRecipients: Function,
      getSurvey: Function,
      removeSurvey: Function,
      resetData: Function,
      updateSurvey: Function
    }
  },
  history: History,
  location: {
    state: ?{
      fromList: boolean,
      mode: string
    }
  },
  match: MatchID,
  state: {
    data: {
      interfaces: {
        modal: ModalType
      },
      survey: Survey
    },
    ui: {
      asynchronous: Asynchronous
    }
  }
};

type State = { updated: boolean };

type Return = React.Element<typeof Document>;

// Component
class UI extends React.Component<Props, State> {
  // Default props
  static defaultProps = STATE_MODELS.wrapper.asynchronous({
    get: {
      survey: { ...STATE_MODELS.model.asynchronous }
    }
  });

  // Constructor
  constructor(props: Props) {
    super(props);

    // Variables
    const { fromList } = props.location.state || { fromList: false };

    // Component properties
    this.fromList = fromList;
    this.surveyId = props.match.params.id;

    // Initial state
    this.state = { updated: false };
  }

  // After a component is mounted...
  componentDidMount() {
    // Get survey
    this.getSurvey();
  }

  // Before a component is unmounted and destroyed...
  componentWillUnmount() {
    // Reset survey data
    this.onResetData();

    // Remove the current survey from its list (if needed)
    this.onRemoveItem();
  }

  // Navigate back to list view screen
  onNavigateBack = (): void => {
    // Configuration
    const { history } = this.props;

    // Track selected survey
    this.onAddSelected();

    // Move the pointer in the history stack by 1 entry, otherwise link to
    if (this.fromList) {
      history.goBack();
    } else {
      history.push(PATHS.surveys.list);
    }
  };

  // Confirm deleting survey
  onDeleteConfirm = (): void => {
    // Delete survey from the given ID
    this.props.actions.surveys.deleteSurvey(this.surveyId, () => {
      // Close a modal
      this.props.actions.modal.closeModal();

      // Redirect to list view
      this.onNavigateBack();
    });
  };

  // Request for deleting survey
  onDeleteRequest = (): void => {
    // Open a confirmation modal
    this.props.actions.modal.openModal();
  };

  // Reload survey
  onReload = (): void => {
    this.getSurvey(() => {
      // Show status once the latest updates have already been fetched
      this.setState(() => ({ updated: true }));

      // Hide status after 3 seconds
      setTimeout(() => {
        this.setState(() => ({ updated: false }));
      }, 3000);
    });
  };

  // Remove survey item from its list
  onRemoveItem = (): void => {
    // Variables
    const { state: { data }, location: { state } } = this.props;
    const survey = data.survey ? data.survey : {};
    const { mode } = state || { mode: false };
    const isActive = Object.prototype.hasOwnProperty.call(survey, mode);
    const isArchived = survey.archived;
    const isCompleted = survey.completed;

    // Remove selected item
    if ((mode && isActive && !survey[mode]) || (!isActive && (isCompleted || isArchived))) {
      this.props.actions.surveys.removeSurvey(this.surveyId);
    }
  };

  // Reset survey data
  onResetData = (): void => {
    this.props.actions.surveys.resetData();
  };

  // Track the current selected survey
  onAddSelected = (): void => {
    if (this.fromList) {
      this.props.actions.surveys.addSelectedSurvey(this.surveyId);
    }
  };

  // Update survey
  onUpdate = (values: {}): void => {
    this.props.actions.surveys.updateSurvey(this.surveyId, values);
  };

  // Get recipients
  getRecipients = (): void => {
    this.props.actions.surveys.getRecipients(this.surveyId);
  };

  // Get survey
  getSurvey = (callback?: Callback): void => {
    this.props.actions.surveys.getSurvey(this.surveyId, callback);
  };

  // Static types definition for class property fields
  fromList: {} | boolean;
  surveyId: string;

  // Render toolbar
  renderToolbar = (): React.Element<typeof Toolbar> => {
    // Variables
    const { state } = this.props;

    // View
    return (
      <Toolbar
        actions={{
          back: this.onNavigateBack,
          delete: this.onDeleteRequest,
          reload: this.onReload,
          update: this.onUpdate
        }}
        state={{
          ...state,
          status: { updated: this.state.updated }
        }}
      />
    );
  };

  // Render content
  renderContent = (): React.Node | void => {
    // Variables
    const { state: { data, ui: { asynchronous } } } = this.props;
    const { error, loading } = asynchronous.get.survey;

    // Error
    if (error) {
      return <Error alert={error} />;
    }

    // Content
    if (!loading && !isEmpty(data.survey)) {
      return (
        <Content
          actions={{
            getRecipients: this.getRecipients
          }}
          state={{
            data: data.survey,
            ui: { asynchronous }
          }}
        />
      );
    }

    // Else
    return null;
  };

  // Render confirmation modal
  renderModal = (): React.Element<typeof Modal> => {
    // Variables
    const { actions, state: { data, ui: { asynchronous } } } = this.props;

    // View
    return (
      <Modal
        actions={{
          close: actions.modal.closeModal,
          confirm: this.onDeleteConfirm
        }}
        state={{
          ui: {
            asynchronous: asynchronous.delete.survey,
            visibility: data.interfaces.modal.isOpen
          }
        }}
      />
    );
  };

  // Render component
  render(): Return {
    return (
      <Document>
        <Head>
          <Title>Survey</Title>
        </Head>
        <Body>
          <Layout>
            {this.renderToolbar()}
            {this.renderContent()}
            {this.renderModal()}
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default UI;
