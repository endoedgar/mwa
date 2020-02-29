const express = require('express');
const superagent = require('superagent');
const { from } = require('rxjs');
const { map, toArray } = require('rxjs/operators');

const app = express();

const cfg = {
    port: 3001,
    resultsPerPage: 10,
    seed: 'foobar',
    apiUrl: 'https://randomuser.me/api/'
};

app.disable('x-powered-by'); // disable x-powered-by header
app.set('case sensitive routing', true);
app.set('strict routing', true);

function getUrl(req) {
    const port = req.app.settings.port || cfg.port;
    return new URL(req.originalUrl, req.protocol + '://' + req.hostname  + ( port == 80 || port == 443 ? '' : ':'+port ));
}

function getNextUrl(req, page) {
    const nextUrl = getUrl(req);
    nextUrl.searchParams.set('page', page + 1);
    return nextUrl;
}

function getCurrentPage(req) {
    return typeof req.query.page !== 'undefined' ? parseInt(req.query.page) : 1;
}

app.get('/users', async function(req, res) {
    try {
        const page = getCurrentPage(req);
        const nextUrl = getNextUrl(req, page);

        res.links({ next: nextUrl });
        res.set('Cache-Control', 'private, max-age=86400');
        
        const data = await superagent.get(cfg.apiUrl)
        .query({ page, results: cfg.resultsPerPage, seed: cfg.seed });
        from(data.body.results).pipe(
            map(({name}) => ({first: name.first, last: name.last})),
            toArray()
        ).subscribe(
            arr => res.json({data: arr}),
            err => { throw err }
        );
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: {
            status: 'error',
            message: 'An error occurred trying to process your request',
        }});
    }
});

app.listen(cfg.port, _ => console.log(`Listening to port ${cfg.port}`));