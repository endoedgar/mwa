const { createServer } = require('http');
const { readFileSync } = require('fs');
const FILENAME = 'bigFile.bin';

createServer(function(req, res) {
    try {
        console.log(`Serving ${FILENAME}...`);
        with(res) {
            writeHead(200, {'Content-type': 'application/octet-stream', 'Content-Disposition': `attachment; filename="${FILENAME}"`})
            write(readFileSync(FILENAME));
            end();
        }
        console.log(`${FILENAME} served.`)
    } catch(error) {
        console.error(error);
        with(res) {
            writeHead(500, {'Content-type': 'text/plain'});
            write(error.toString());
            end();
        }
    }
}).listen(1337);