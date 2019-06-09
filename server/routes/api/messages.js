const express = require('express');
const Message = require('../../models/message');

const router = express.Router();

router.route('/messages')

  /** @return all the messages a user can see */
  .get((req, res) => {
    const { user } = req.session;
    Message
      .find({ $or: [{ isPrivate: false }, { isPrivate: true, sender: user }] })
      .limit(10)
      .sort({ timestamp: -1 })
      .exec((error, messages) => {
        if (error) {
          return res.status(500).json({ message: 'Upssss.... We are unable to show you your messages right now.' });
        }
        return res.status(200).json(messages);
      });
  })

  /** Save a message to the database */
  .post((req, res) => {
    const { text, isPrivate } = req.body;
    const { user } = req.session;
    const message = new Message({ text, isPrivate, sender: user });

    if (!user) {
      res.status(500).json({ message: 'Upsss... Login before starting to post.' });
    } else {
      message.save((error, savedMessage) => {
        if (error) {
          return res.status(500).json({ message: 'Upsss... Your message could not be saved.' });
        }
        req.io.sockets.emit('newMessage', savedMessage);
        return res.status(200).json(savedMessage);
      });
    }
  });

module.exports = router;
