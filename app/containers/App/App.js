import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import MessageContainer from 'components/MessageContainer';
import MessagePoster from 'components/MessagePoster';
import { postMessage } from 'actions/messages';

import './App.scss';

const App = ({ messages, user, onPostMessage }) => (
  <div className="app-wrapper">
    <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <MessageContainer className="message-container" messages={messages} user={user} />
    <MessagePoster className="message-poster" onPostMessage={onPostMessage} user={user} />
  </div>
);

App.propTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  onPostMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  messages: state.messages,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onPostMessage: (message) => {
    dispatch(postMessage(message));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
