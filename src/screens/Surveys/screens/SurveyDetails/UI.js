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

    // Component properties
    this.surveyId = this.props.match.params.id;

    // Initial state
    this.state = { updated: false };
  }

  // After a component is mounted...
  componentDidMount() {
    // Get survey
    this.getSurvey();
  }

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
        reload: this.onReload
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
  renderModal = () => <Modal />;

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
