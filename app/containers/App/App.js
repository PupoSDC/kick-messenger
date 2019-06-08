import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import MessageContainer from 'components/MessageContainer/MessageContainer';
import './style.scss';

const App = ({ messages, user }) => (
  <div className="app-wrapper">
    <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <MessageContainer messages={messages} user={user} />
  </div>
);

App.propTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  messages: state.messages,
  user: state.user
});


// const mapDispatchToProps = (dispatch) => ({
//   onDelete: (id) => {
//
//   }
// });


export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(App);
