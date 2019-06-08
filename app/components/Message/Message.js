import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss';

const Message = ({ message }) => {
  const {text, sender, timestamp} = message;
  const time = (new Date(timestamp)).toDateString();
  return (
    <div>
      <p>{text}</p>
      <p>{sender} at {time}</p>
    </div>
  );
};

// List.propTypes = {
//   component: PropTypes.func.isRequired,
//   items: PropTypes.array,
// };

export default Message;
