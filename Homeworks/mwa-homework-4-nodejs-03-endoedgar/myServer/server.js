const { Subject } = require('rxjs');
const { map, filter } = require('rxjs/operators');
const { createServer } = require('http');
const { parse } = require('url');
const { fib } = require('./fibbonaci');

const PORTNUMBER = 4000;

function writeObjectAsJsonResponse({writeHead, write, end}, object) {
    if(object.status && object.status != 200) {
        console.error(`${process.pid}: `); console.error(object);
    }

    writeHead(object.status ? object.status : 200, {'Content-type': 'application/json'});
    write(JSON.stringify({ ...object, pid: process.pid }));
    end();
}

function handleValidRequest({url, res}) {
    writeObjectAsJsonResponse(res, { fib: fib(url.query.n) })
}

function badRequest({url, res}) {
    writeObjectAsJsonResponse(res, {status: 400, message: 'Your request is missing the N parameter.', });
}

const requestSubject = new Subject();
const requestMappedToUrlSubject = requestSubject.pipe(
    map(({req, res}) => ({
        url: parse(req.url, true),
        res: res
    }))
);

requestMappedToUrlSubject.pipe(
    filter(({url, res}) => typeof url.query.n === 'undefined')
).subscribe(badRequest);

requestMappedToUrlSubject.pipe(
    filter(({url, res}) => typeof url.query.n !== 'undefined')
).subscribe(handleValidRequest);

createServer((req, res) => { requestSubject.next({req, res}); })
.listen(PORTNUMBER, _ => console.log(`${process.pid}: Listening to port ${PORTNUMBER}`));