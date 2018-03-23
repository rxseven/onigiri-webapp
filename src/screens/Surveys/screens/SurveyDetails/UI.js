// Module dependencies
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import Layout from '../../../../components/shared/base/Layout';
import Error from '../../../../components/shared/extended/Error';

// Constants
import PROP_TYPES from '../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../constants/models/state';
import PATHS from '../../../../constants/router/paths';

// Peer dependencies
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
    this.props.actions.survey.deleteSurvey(this.surveyId, () => {
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
    const { state: { data: { survey } }, location: { state } } = this.props;
    const { mode } = state || { mode: false };
    const isActive = Object.prototype.hasOwnProperty.call(survey, mode);
    const isArchived = survey.archived;
    const isCompleted = survey.completed;

    // Remove selected item
    if ((isActive && !survey[mode]) || (!isActive && (isCompleted || isArchived))) {
      this.props.actions.survey.removeSurvey(this.surveyId);
    }
  };

  // Reset survey data
  onResetData = () => {
    this.props.actions.survey.resetData();
  };

  // Update survey
  onUpdate = (values) => {
    this.props.actions.survey.updateSurvey(this.surveyId, values);
  };

  // Get recipients
  getRecipients = () => {
    this.props.actions.survey.getRecipients(this.surveyId);
  };

  // Get survey
  getSurvey = (callback) => {
    this.props.actions.survey.getSurvey(this.surveyId, callback);
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
