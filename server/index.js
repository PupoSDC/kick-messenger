const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const session = require('express-session');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const { resolve } = require('path');

const logger = require('./util//logger');
const argv = require('./util/argv');
const port = require('./util//port');
const setup = require('./middlewares/frontendMiddleware');

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const prettyHost = customHost || 'localhost';
const host = customHost || null;

// get API routes
const userRoutes = require('./routes/api/users');
const messagesRoutes = require('./routes/api/messages');

// Start Server
const app = express();
const db = mongoose.connection;
const server = app.listen(port, host, (err) => {
  if (err) {
    logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});
const io = socketio.listen(server);

// Connect to DataBase
mongoose.connect('mongodb://localhost/klickMesseger', { useNewUrlParser: true });
mongoose.promise = global.Promise;
db.on('error', () => logger.error('DB connection error'));
db.once('open', () => logger.info('mongoDB connected!'));

// Plugin midleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'aSuperSecureKeyThatINeedToChangeLater',
  key: 'sessionId',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));
app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use('/api', userRoutes);
app.use('/api', messagesRoutes);
app.set('trust proxy', 1);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
});
