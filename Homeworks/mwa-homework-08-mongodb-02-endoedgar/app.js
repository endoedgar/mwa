const { port } = require('./config.json');
const { logErrors, handleErrors } = require('./middlewares/errors');

const app = require('express')();

app.use(require('./middlewares/connection').middleware);

app.use('/locations', require('./routes/locations'));

app.use(logErrors);
app.use(handleErrors);

app.listen(port, _ => console.log(`Listening on ${port}`));