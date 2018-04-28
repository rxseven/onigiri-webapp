// Module dependencies
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

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

  // Failure handler
  onFailure = () => {
    // Reset session status
    this.props.actions.auth.oauthFailure();
  };

  // Success handler
  onSussess = (response) => {
    // Submit the access token to the API
    this.props.actions.auth.oauthGoogle(response.accessToken, (status) => {
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
  };

  // Request handler
  onRequest = () => {
    // Set loading status
    this.setState(() => ({ isLoading: true }));

    // Set session status
    this.props.actions.auth.oauthRequest();
  };

  // Render component
  render() {
    return (
      <GoogleLogin
        buttonText="Login"
        className="btn btn-danger btn-block"
        clientId={process.env.REACT_APP_GOOGLE_APP_ID}
        disabled={this.state.isLoading}
        onFailure={this.onFailure}
        onRequest={this.onRequest}
        onSuccess={this.onSussess}
      >
        <span>Login with Google</span>
      </GoogleLogin>
    );
  }
}

// Module exports
export default withRouter(UI);
