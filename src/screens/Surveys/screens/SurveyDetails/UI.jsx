// Module dependencies
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Document';
import Layout from 'components/common/Layout';
import Error from 'components/composite/Error';

// Constants
import PROP_TYPES from 'constants/models/propTypes';
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Companion files
import Content from './components/Content';
import Modal from './components/Modal';
import Toolbar from './components/Toolbar';

// Declare prop types and default props
const propTypes = PROP_TYPES.wrapper.asynchronous({
  get: PropTypes.shape({
    survey: PROP_TYPES.model.asynchronous
  })
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  get: {
    survey: { ...STATE_MODELS.model.asynchronous }
  }
});

// Component
class UI extends Component {
  // Constructor
  constructor(props) {
    super(props);

    // Variables
    const { fromList } = props.location.state || { fromList: false };

    // Component properties
    this.fromList = fromList;
    this.surveyId = this.props.match.params.id;

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
  onNavigateBack = () => {
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
  onDeleteConfirm = () => {
    // Delete survey from the given ID
    this.props.actions.surveys.deleteSurvey(this.surveyId, () => {
      // Close a modal
      this.props.actions.modal.closeModal();

      // Redirect to list view
      this.onNavigateBack();
    });
  };

  // Request for deleting survey
  onDeleteRequest = () => {
    // Open a confirmation modal
    this.props.actions.modal.openModal();
  };

  // Reload survey
  onReload = () => {
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
  onRemoveItem = () => {
    // Variables
    const { state: { data }, location: { state } } = this.props;
    const survey = data.survey ? data.survey : {};
    const { mode } = state || { mode: false };
    const isActive = Object.prototype.hasOwnProperty.call(survey, mode);
    const isArchived = survey.archived;
    const isCompleted = survey.completed;

    // Remove selected item
    if ((isActive && !survey[mode]) || (!isActive && (isCompleted || isArchived))) {
      this.props.actions.surveys.removeSurvey(this.surveyId);
    }
  };

  // Reset survey data
  onResetData = () => {
    this.props.actions.surveys.resetData();
  };

  // Track the current selected survey
  onAddSelected = () => {
    if (this.fromList) {
      this.props.actions.surveys.addSelectedSurvey(this.surveyId);
    }
  };

  // Update survey
  onUpdate = (values) => {
    this.props.actions.surveys.updateSurvey(this.surveyId, values);
  };

  // Get recipients
  getRecipients = () => {
    this.props.actions.surveys.getRecipients(this.surveyId);
  };

  // Get survey
  getSurvey = (callback) => {
    this.props.actions.surveys.getSurvey(this.surveyId, callback);
  };

  // Render toolbar
  renderToolbar = props => (
    <Toolbar
      actions={{
        back: this.onNavigateBack,
        delete: this.onDeleteRequest,
        reload: this.onReload,
        update: this.onUpdate
      }}
      state={{
        ...props.state,
        status: { updated: this.state.updated }
      }}
    />
  );

  // Render content
  renderContent = ({ state: { data, ui: { asynchronous } } }) => {
    // Variables
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
  renderModal = ({ actions, state: { data, ui: { asynchronous } } }) => (
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

  // Render component
  render() {
    return (
      <Document>
        <Head>
          <Title>Survey</Title>
        </Head>
        <Body>
          <Layout>
            {this.renderToolbar(this.props)}
            {this.renderContent(this.props)}
            {this.renderModal(this.props)}
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