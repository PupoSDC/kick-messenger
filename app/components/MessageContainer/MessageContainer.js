import React from 'react';
import PropTypes from 'prop-types';
import Message from 'components/Message/Message';
// import './style.scss';

const MessageContainer = ({ messages }) => {
  if (messages && messages.length) {
	const messageElements = messages.map(message => <Message message={ message } key={ message._id }/>);
	return (
	  <div>
	    { messageElements }
	  </div>
    );
  }
  return (
  	<div>No messages</div>
  );
};

// List.propTypes = {
//   component: PropTypes.func.isRequired,
//   items: PropTypes.array,
// };

export default MessageContainer;
