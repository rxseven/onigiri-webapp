// Module dependencies
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { Button } from '../../../../components/shared/base/Buttons';

// Constants
import PATHS from '../../../../constants/router/paths';

// Component
class UI extends Component {
  // After a component is instantiated as well as when it receives new props...
  static getDerivedStateFromProps(nextProps, prevState) {
    // Set loading status
    return { isLoading: nextProps.state.data.session.loading.signin } || null;
  }

  // Initial state
  state = {
    isLoading: false
  };

  // Login handler
  onLogin = (response) => {
    // Success, submit the access token to the API
    if (response.accessToken) {
      this.props.actions.auth.oauthFacebook(response.accessToken, (status) => {
        // Redirect to Welcome screen after user account has been registered
        if (status === 201) {
          this.props.history.push({
            pathname: PATHS.users.welcome,
            state: {
              referrer: true
            }
          });
        }

        // Redirect to Surveys screen after user has been authenticated
        if (status === 200) {
          this.props.history.push({ pathname: PATHS.surveys.list });
        }
      });
    } else {
      // Failure, reset session status
      this.props.actions.auth.oauthFailure();
    }
  };

  // Request handler
  onRequest = () => {
    // Set loading status
    this.setState(() => ({ isLoading: true }));

    // Set session status
    this.props.actions.auth.oauthRequest();
  };

  // Render button
  renderButton = ({ onClick }) => (
    <Button block button="primary" disabled={this.state.isLoading} handler={onClick}>
      Login with Facebook
    </Button>
  );

  // Render component
  render() {
    return (
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={false}
        callback={this.onLogin}
        disableMobileRedirect
        fields="email, name, picture"
        isMobile
        onClick={this.onRequest}
        render={renderProps => this.renderButton(renderProps)}
        scope="public_profile, email"
      />
    );
  }
}

// Module exports
export default withRouter(UI);
