// Module dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getSession } from '../../../../data/session/reducer';
import { getUI } from './reducer';

import { Button } from '../../../../components/shared/base/Buttons';
import { Body, Document, Head, Title } from '../../../../components/shared/base/Document';
import { FormHL, FormMeta, FormStack } from '../../../../components/shared/base/Form';
import Icon from '../../../../components/shared/base/Icon';
import { Tip, TipHeader } from '../../../../components/shared/base/Tip';
import Error from '../../../../components/shared/extended/Error';
import Layout from '../../../Users/components/Layout';

// Constants
import PATHS from '../../../../constants/router/paths';

// Peer dependencies
import Form from './components/Form';

// Constants
const PAGE_TITLE = 'Sign in to Onigiri';

// Component
class SignIn extends Component {
  // After a component is instantiated as well as when it receives new props...
  static getDerivedStateFromProps(nextProps, prevState) {
    // Set loading status
    return { isLoading: nextProps.state.data.session.loading.signin } || null;
  }

  // Initial state
  state = {
    isLoading: false,
    isLocal: false
  };

  // Toggle sign-in form
  onToggleForm = () => {
    this.setState(prevState => ({ isLocal: !prevState.isLocal }));
  };

  // Render forms
  renderForms = () => (
    <Choose>
      <When condition={!this.state.isLocal}>
        <FormStack>
          <Button block disabled={this.state.isLoading} handler={this.onToggleForm}>
            Email and password
          </Button>
        </FormStack>
      </When>
      <Otherwise>
        <FormStack>
          <Form onCancel={this.onToggleForm} />
        </FormStack>
      </Otherwise>
    </Choose>
  );

  // Render options
  renderOptions = ({ isLoading }) => (
    <If condition={!isLoading}>
      <FormMeta>
        New to Onigiri? <Link to={PATHS.users.signup}>Create an account</Link>.
      </FormMeta>
    </If>
  );

  // Render status
  renderStatus = ({ isError, isLoading, strategy }) => (
    <Choose>
      <When condition={isError}>
        <Error alert={isError} />
      </When>
    </Choose>
  );

  // Render tips
  renderTips = ({ isLoading }) => (
    <If condition={!isLoading}>
      <Tip end>
        <TipHeader>
          <Icon name="star" title="Tips" /> Demo tips
        </TipHeader>
        <p>Not ready to create a new accout? sure, you can play with the testing account:</p>
        <p>
          email: <code>skywalker@rxseven.com</code>
          <br />password: <code>R2D2s</code>
        </p>
      </Tip>
    </If>
  );

  // Render component
  render() {
    // Variables
    const { asynchronous, strategy } = this.props.state.ui;
    const { error: isError, loading: isLoading } = asynchronous.post;

    // View
    return (
      <Document>
        <Head>
          <Title>{PAGE_TITLE}</Title>
        </Head>
        <Body>
          <Layout>
            <FormHL>{PAGE_TITLE}</FormHL>
            {this.renderForms()}
            {this.renderStatus({ isError, isLoading, strategy })}
            {this.renderOptions({ isLoading })}
            {this.renderTips({ isLoading })}
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      session: getSession(state)
    },
    ui: getUI(state)
  }
});

// Connect component to application state
const container = connect(mapStateToProps)(SignIn);

// Module exports
export default container;
