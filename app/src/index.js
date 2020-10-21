import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import {appReducer} from './state/appReducer'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(appReducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>  
    </Provider>, 
rootElement);

