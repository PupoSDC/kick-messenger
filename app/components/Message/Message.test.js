import React from 'react';
import { shallow, mount } from 'enzyme';

import Message from './Message';

const message = {
  sender: 'Pedro',
  text: 'hello world!',
  isPrivate: false,
  timestamp: '2019-06-08T13:53:16.598Z',
  frenchDate: '08/06/2019'
};

const privateMessage = {
  sender: 'Amanda',
  text: 'hello world I\'m private!',
  isPrivate: true,
  timestamp: '2020-06-08T13:53:16.598Z',
  frenchDate: '08/06/2020'
};

describe('<Message />', () => {
  it('Should display text, sender and date', () => {
    const renderedComponent = mount(<Message message={message} user={message.sender} />);
    expect(renderedComponent.find('.main-content > p').text()).toBe(message.text);
    expect(renderedComponent.find('.main-content > h5').text()).toBe(message.sender);
    expect(renderedComponent.find('.footer').text()).toBe(`Envoyé le ${message.frenchDate}`);
  });

  it('Should display text, sender and private warning', () => {
    const renderedComponent = mount(<Message message={privateMessage} user={privateMessage.sender} />);
    expect(renderedComponent.find('.main-content > p').text()).toBe(privateMessage.text);
    expect(renderedComponent.find('.main-content > h5').text()).toBe(privateMessage.sender);
    expect(renderedComponent.find('.footer').text()).toBe('Message Privé');
  });

  it('Should align correctly when viewed by other users', () => {
    const ownMessage = shallow(<Message message={privateMessage} user={privateMessage.sender} />);
    const otherMessage = shallow(<Message message={message} user={privateMessage.sender} />);
    expect(ownMessage.hasClass('message-box-own')).toBe(true);
    expect(otherMessage.hasClass('message-box-own')).toBe(false);
  });
});
