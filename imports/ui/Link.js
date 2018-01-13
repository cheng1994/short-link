import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        error: ''
      };
  }

  componentWillMount(){
    this.props.onEnter();
  }

  onLogout(){
    Accounts.logout();
  }

  render() {
    return (
      <div>
        <h1>Links</h1>

        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}
