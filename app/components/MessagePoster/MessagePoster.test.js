import React from 'react';
import { shallow } from 'enzyme';

import MessagePoster from './MessagePoster';

describe('<MessagePoster />', () => {
  it('Should display login Information if no user', () => {
    const renderedComponent = shallow(<MessagePoster user={''} />);
    expect(renderedComponent.hasClass('type-area-no-user')).toBe(true);
  });

  if ('Should ') {
    it('Should show all messages', () => {
      const messages = [{ _id: 1, text: 'demo' }, { _id: 2, text: 'demo' }, { _id: 3, text: 'demo' }];
      const renderedComponent = shallow(<MessagePoster messages={messages} user={'someUser'} />);
      expect(renderedComponent.find('.message')).toHaveLength(messages.length);
    });
  }
});
