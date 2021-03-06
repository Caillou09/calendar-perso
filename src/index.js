import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calendar from './components/Calendar'
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function Root() {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/test-calendar" component={Calendar}/>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
