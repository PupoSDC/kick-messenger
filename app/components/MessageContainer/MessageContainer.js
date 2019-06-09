import React from 'react';
import PropTypes from 'prop-types';
import Message from 'components/Message';
import './style.scss';

const MessageContainer = ({ messages, user }) => {
  if (messages && messages.length) {
    const messageElements = messages.map((message) => (
      <div className="message" key={message._id}>
        <Message message={message} user={user} />
      </div>
    ));
    return (<div className="message-container">{ messageElements }</div>);
  }
  return (<div className="message-container-empty">No messages</div>);
};

MessageContainer.propTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};

export default MessageContainer;
