/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';

import 'sanitize.css/sanitize.css';
import 'styles/theme.scss';

import App from 'containers/App/App';
import rootReducer from 'reducers';
import socket from 'utils/socket';
import { getMessages, newMessageFromSocket } from 'actions/messages';
import { getUser } from 'actions/users';


const openSansObserver = new FontFaceObserver('Open Sans', {});
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getMessages());
store.dispatch(getUser());

socket.on('newMessage', (newMessage) => {
  store.dispatch(newMessageFromSocket(newMessage));
});

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
