// @flow
// Module dependencies
import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Helper functions
import { generateState } from 'helpers/state';

// Components and HOCs
import FacebookLogin from 'components/features/OAuth/Facebook';
import GoogleLogin from 'components/features/OAuth/Google';
import { Button } from 'components/common/Buttons';
import { Body, Document, Head, Title } from 'components/common/Page';
import { FormHL, FormMeta, FormStack } from 'components/common/Forms';
import Icon from 'components/common/Icon';
import Spinner from 'components/common/Spinner';
import { Tip, TipHeader } from 'components/common/Tip';
import Error from 'components/composite/Error';
import toJS from 'HOCs/state/toJS';

// Constants
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Types
import type { Asynchronous } from 'types/common/state';

// Action creators, static types, and selectors
import { getSession } from 'data/session/reducers';
import { getUI } from './reducers';
import type { Strategy } from './types';

// Companion files
import Layout from '../../../Users/components/Layout';
import Form from './components/Form';
import './styles.scss';

// Constants
const PAGE_TITLE = 'Sign in to Onigiri';

// Static types
type Props = {
  state: {
    ui: {
      asynchronous: {
        post: Asynchronous
      },
      strategy: Strategy
    }
  }
};

type State = {
  isLoading: boolean,
  isLocal: boolean
};

type Return = React.Element<typeof Document>;

// Component
class SignIn extends React.Component<Props, State> {
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
  onToggleForm = (): void => {
    this.setState(prevState => ({ isLocal: !prevState.isLocal }));
  };

  // Render forms
  renderForms = (): React.ChildrenArray<React.Element<typeof FormStack>> => (
    <Choose>
      <When condition={!this.state.isLocal}>
        <FormStack>
          <GoogleLogin />
        </FormStack>
        <FormStack>
          <FacebookLogin />
        </FormStack>
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
  renderOptions = ({ isLoading }): React.Element<typeof FormMeta> | void => (
    <If condition={!isLoading}>
      <FormMeta>
        New to Onigiri? <Link to={PATHS.users.signup}>Create an account</Link>.
      </FormMeta>
    </If>
  );

  // Render status
  renderStatus = ({
    isError,
    isLoading,
    strategy
  }): React.Element<typeof FormStack> | React.Element<typeof Error> => (
    <Choose>
      <When condition={isLoading && strategy.type === 'oauth'}>
        <FormStack>
          <div styleName="loading">
            <Spinner />
          </div>
        </FormStack>
      </When>
      <When condition={!!isError}>
        {/* flow-disable-next-line */}
        <Error alert={isError} />
      </When>
    </Choose>
  );

  // Render tips
  renderTips = ({ isLoading }): React.Element<typeof Tip> | void => (
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
  render(): Return {
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
const mapStateToProps = (state: any): any =>
  generateState(STATE_MODELS.immutable.setIn(['data', 'session'], getSession(state)).setIn(['ui'], getUI(state)));

// Connect component to application state
const container = connect(mapStateToProps)(toJS(SignIn));

// Module exports
export default container;
