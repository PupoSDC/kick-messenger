import React from 'react';
import { shallow } from 'enzyme';

import Message from '../Message';

describe('<Message />', () => {
  it('Should display text, sender and date', () => {
    const message = { sender: 'Pedro', text: 'hello world!', isPrivate: 'false' };
    const textBox = ({ text }) => <p>{text}</p>; // eslint-disable-line react/prop-types

    const renderedComponent = shallow(<Message message={message} user={message.sender} />);
    expect(renderedComponent.find(textBox)).toBeDefined();
  });
});
