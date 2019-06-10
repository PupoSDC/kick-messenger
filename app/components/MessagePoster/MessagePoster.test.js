import React from 'react';
import { mount } from 'enzyme';

import MessagePoster from './MessagePoster';

describe('<MessagePoster />', () => {
  it('Should be disabled if no user', () => {
    const renderedComponent = mount(<MessagePoster user={''} onPostMessage={() => {}} />);
    expect(renderedComponent.find('.text-container > textarea[disabled=true]')).toHaveLength(1);
    expect(renderedComponent.find('.send-container > button[disabled=true]')).toHaveLength(1);
  });

  it('Should trigger onPostMessage on send button pressed', () => {
    const testMessage = 'Hello World';
    const onPostMessageMock = jest.fn((message) => message);
    const renderedComponent = mount(<MessagePoster user={'Pedro'} onPostMessage={onPostMessageMock} />);

    expect(renderedComponent.find('.text-container textarea[disabled=true]')).toHaveLength(0);
    expect(renderedComponent.find('.send-container button[disabled=true]')).toHaveLength(0);

    renderedComponent.find('.text-container > textarea').first().simulate('change', { target: { value: testMessage } });
    renderedComponent.find('.send-container > button').first().simulate('submit');
    expect(onPostMessageMock).toHaveBeenCalled();
    expect(onPostMessageMock.mock.results[0].value).toEqual({ text: testMessage, isPrivate: false });
  });

  it('Should be possible to switch between private and public messages', () => {
    const renderedComponent = mount(<MessagePoster user={'Pedro'} onPostMessage={() => {}} />);

    renderedComponent.find('.private-selector > button[value="true"]').first().simulate('click');
    expect(renderedComponent.find('.private-selector > button[value="true"][disabled=true]')).toHaveLength(1);
    expect(renderedComponent.find('.private-selector > button[value="false"][disabled=true]')).toHaveLength(0);
    expect(renderedComponent.state().isPrivate).toEqual(true);

    renderedComponent.find('.private-selector > button[value="false"]').first().simulate('click');
    expect(renderedComponent.find('.private-selector > button[value="true"][disabled=true]')).toHaveLength(0);
    expect(renderedComponent.find('.private-selector > button[value="false"][disabled=true]')).toHaveLength(1);
    expect(renderedComponent.state().isPrivate).toEqual(false);
  });

  it('Should be possible to submit a message by pressing Enter on textarea', () => {
    const testMessage = 'Hello World';
    const onPostMessageMock = jest.fn((message) => message);
    const renderedComponent = mount(<MessagePoster user={'Pedro'} onPostMessage={onPostMessageMock} />);

    renderedComponent.find('.text-container > textarea').first().simulate('change', { target: { value: testMessage } });
    renderedComponent.find('.text-container > textarea').first().simulate('keydown', { key: 'Enter' });

    expect(onPostMessageMock).toHaveBeenCalled();
    expect(onPostMessageMock.mock.results[0].value).toEqual({ text: testMessage, isPrivate: false });
  });
});
