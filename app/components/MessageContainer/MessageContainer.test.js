import React from 'react';
import { shallow } from 'enzyme';

import MessageContainer from './MessageContainer';


describe('<MessageContainer />', () => {
  it('Should display no messages', () => {
    const renderedComponent = shallow(<MessageContainer messages={[]} user={'someUser'} />);
    expect(renderedComponent.hasClass('message-container-empty')).toBe(true);
  });


  it('Should show all messages', () => {
    const messages = [{ _id: 1, text: 'demo' }, { _id: 2, text: 'demo' }, { _id: 3, text: 'demo' }];
    const renderedComponent = shallow(<MessageContainer messages={messages} user={'someUser'} />);
    expect(renderedComponent.find('.message')).toHaveLength(messages.length);
  });
});
