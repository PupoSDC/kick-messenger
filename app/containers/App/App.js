import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import MessageContainer from 'components/MessageContainer/MessageContainer';
import './style.scss';

const App = ({ messages }) => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <h1>Hello World!</h1>
    <MessageContainer messages={ messages } />
  </div>
);

const mapStateToProps = state => {
  return {
    messages: state.messages
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
