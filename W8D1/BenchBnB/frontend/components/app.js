import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SearchContainer from './search_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1> yo </h1>
      </Link>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LogInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <Route exact path="/" component={ SearchContainer } />
  </div>
);
export default App;
