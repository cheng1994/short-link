import React from 'react';
import ReactDOM from 'react-dom';

import {AppRouter, browserHistory} from '../imports/routes/AppRouter';

Meteor.startup(() => {
  ReactDOM.render(<AppRouter />, document.getElementById('app'));
})
