import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

export const browserHistory = require('history').createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isAuthenticated && isUnauthenticatedPage){
    browserHistory.replace('/links');
  } else if(!isAuthenticated && isAuthenticatedPage){
    browserHistory.replace('/')
  }

  console.log('isAuthenticated', isAuthenticated);
});

const onEnterPublicPage = () => {
  if(Meteor.userId()){
    browserHistory.replace('/links')
  }
}

const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/')
  }
}

export const AppRouter = () => (
  <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={() => <Login onEnter={onEnterPublicPage} />} />
        <Route path="/signup" component={() => <Signup onEnter={onEnterPublicPage} />} />
        <Route path="/links" component={() => <Link onEnter={onEnterPrivatePage} />} />
        <Route path="*" component={NotFound} />
      </Switch>
  </Router>
);
