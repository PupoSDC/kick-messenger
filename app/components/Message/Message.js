import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Message.scss';

const converTimestampToFrenchDate = (timestamp) => new Date(timestamp)
  .toJSON()
  .slice(0, 10)
  .split('-')
  .reverse()
  .join('/');

const Message = ({ message, user }) => {
  const {
    text, sender, timestamp, isPrivate
  } = message;
  const time = converTimestampToFrenchDate(timestamp);
  const isOwnMessage = (user === sender);

  const messageBoxClasses = cx({
    'message-box': true,
    'message-box-private': isPrivate,
    'message-box-own': isOwnMessage
  });

  return (
    <div className={messageBoxClasses}>
      <div className="flex-box">
        <div className="main-content">
          <h5>{sender}</h5>
          <p>{text}</p>
        </div>
      </div>
      <div className="footer">
        { isPrivate ? 'Message Privé' : `Envoyé le ${time}` }
      </div>
    </div>
  );
};

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
};


export default Message;
