import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import MessageContainer from 'components/MessageContainer/MessageContainer';
import './style.scss';

const App = ({ messages, user }) => (
  <div className="app-wrapper">
    <Helmet titleTemplate="%s - React.js Boilerplate"  defaultTitle="React.js Boilerplate">
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <MessageContainer messages={ messages } user={ user } />
  </div>
);

const mapStateToProps = state => {
  return {
    messages: state.messages,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {

    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
