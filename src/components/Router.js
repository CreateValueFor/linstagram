import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Explore from '../routes/Explore';
import Home from '../routes/Home';
import Message from '../routes/Message';
import Profile from '../routes/Profile';
import Navigation from './Navigation';


function AppRouter({refreshUser, isLoggedIn, userObj}) {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj = {userObj}/>}
      <Switch>
        {isLoggedIn ? (
          <>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/profile/">
            <Profile userObj={userObj}refreshUser={refreshUser} />
          </Route>
          <Route exact path="/direct/inbox/">
            <Message userObj={userObj}/>
          </Route>
          <Route exact path="/explore/">
            <Explore/>
          </Route>
          </>
        ) :
        <Route exact path="/">
          <Auth/>
        </Route>}

      </Switch>
    </Router>
  );
}

export default AppRouter;