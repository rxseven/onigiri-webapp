// Module dependencies
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

// Component
class UI extends Component {
  // Failure handler
  onFailure = () => {
    // Reset session status
    this.props.actions.auth.oauthFailure();
  };

  // Success handler
  onSussess = (response) => {
    // Submit the access token to the API
    this.props.actions.auth.oauthGoogle(response.accessToken, null);
  };

  // Request handler
  onRequest = () => {
    // Set session status
    this.props.actions.auth.oauthRequest();
  };

  // Render component
  render() {
    return (
      <GoogleLogin
        buttonText="Login"
        className="btn btn-danger btn-block"
        clientId="578117249100-eacgkquh7te9d1mnthkcneejdu67m3cd.apps.googleusercontent.com"
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
export default UI;
