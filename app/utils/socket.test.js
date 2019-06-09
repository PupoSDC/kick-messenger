import socket from './socket';

describe('socket', () => {
  it('should open', () => {
    socket.on('newMessage', () => { });
  });
});
