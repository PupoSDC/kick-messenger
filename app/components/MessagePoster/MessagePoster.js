import React from 'react';
import PropTypes from 'prop-types';
import sendIcon from 'images/send.svg';

import './MessagePoster.scss';

class MessagePoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text || '',
      isPrivate: props.isPrivate || false
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePrivateChange = this.handlePrivateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    const text = event.target.value;
    this.setState({ text });
  }

  handlePrivateChange(event) {
    const isPrivate = (event.target.value === 'true');
    this.setState({ isPrivate });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { text, isPrivate } = this.state;
    const { onPostMessage } = this.props;
    onPostMessage({ text, isPrivate });
  }

  isUserConnected() {
    const { user } = this.props;
    return Boolean(user);
  }

  render() {
    const { text, isPrivate } = this.state;
    return (
      <form className="type-area" onSubmit={this.handleSubmit}>
        <div className="private-selector">
          <button
            type="button"
            value="false"
            onClick={this.handlePrivateChange}
            disabled={isPrivate}
          >Message
          </button>
          <button
            type="button"
            value="true"
            onClick={this.handlePrivateChange}
            disabled={!isPrivate}
          >Note
          </button>
        </div>
        <div className="main-area">
          <div className="text-container">
            <textarea
              value={text}
              placeholder="tapez votre message..."
              disabled={!this.isUserConnected()}
              onChange={this.handleTextChange}
            >
            </textarea>
          </div>
          <div className="send-container">
            <button type="submit" disabled={!this.isUserConnected()}>
              <img src={sendIcon} alt="Logo" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

MessagePoster.propTypes = {
  text: PropTypes.string,
  user: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool,
  onPostMessage: PropTypes.func.isRequired
};

export default MessagePoster;
