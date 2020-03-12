const express = require('express');

const cfg = require('./config.json');
const lecturesRoute = require('./routes/lectures');
const { logErrors, handleErrors } = require('./middlewares/errorHandlers.js');
const connectDB = require('./middlewares/connection');

const app = express();

async function main() {
    try {
        app.use(connectDB);
        app.use('/lectures', lecturesRoute);
        app.use(logErrors);
        app.use(handleErrors);

        app.listen(cfg, _ => console.log(`Listening on port ${cfg.port}`));
    } catch(err) {
        console.error(err);
    }
}

main();
