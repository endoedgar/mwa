const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const usersRouter = require('./routes/users');
const { user_pic_folder, port } = require('./config.json');
const { logErrors, clientErrorHandler, errorHandler } = require('./middlewares/error_handlers');

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// middlewares handlers
app.use(cors());
app.use(morgan('tiny', { stream: accessLogStream }));
app.use('/picture', express.static(user_pic_folder))
app.use('/users', usersRouter);

// routes handlers

// error handlers
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(port, _ => console.log(`Listening on ${port}`))