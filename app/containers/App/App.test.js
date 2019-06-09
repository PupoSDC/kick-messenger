import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import MessageContainer from 'components/MessageContainer';
import MessagePoster from 'components/MessagePoster';

import App from './App';

const mockStore = configureStore();

describe('<App />', () => {
  it('Should display mesages and message poster', () => {
    const messages = [
      {
        text: 'hello',
        timestamp: Date.now(),
        sender: 'Pedro',
        _id: '123'
      }
    ];
    const user = 'Pedro';

    const store = mockStore({ messages, user });
    const renderedComponent = mount(<App store={store} />);

    expect(renderedComponent.find(MessageContainer)).toHaveLength(1);
    expect(renderedComponent.find(MessagePoster)).toHaveLength(1);

    expect(renderedComponent.find(MessageContainer).at(0).props().messages).toEqual(messages);
    expect(renderedComponent.find(MessageContainer).at(0).props().user).toEqual(user);
    expect(renderedComponent.find(MessagePoster).at(0).props().user).toEqual(user);
  });
});
