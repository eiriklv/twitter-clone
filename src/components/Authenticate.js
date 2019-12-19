import React from 'react';

import { checkSession } from '../services/session';

class Authenticate extends React.Component {
  async componentDidMount() {
    const { history } = this.props;

    const isAuthenticated = await checkSession();

    if (!isAuthenticated) {
      history.replace('/login');
    } else {
      history.replace('/home');
    }
  }

  render() {
    return (
      <div>Authenticating...</div>
    );
  }
}

export default Authenticate;
