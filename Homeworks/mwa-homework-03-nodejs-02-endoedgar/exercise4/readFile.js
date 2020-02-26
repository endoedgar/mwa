const { createServer } = require('http');
const { readFile } = require('fs');
const { promisify } = require('util');
const FILENAME = 'bigFile.bin';

const readFileAsync = promisify(readFile);

createServer(async function(req, res) {
    try {
        console.log(`Serving ${FILENAME}...`);
        const entireFileBuffer = await readFileAsync(FILENAME);
        with(res) {
            writeHead(200, {'Content-type': 'application/octet-stream', 'Content-Disposition': `attachment; filename="${FILENAME}"`})
            write(entireFileBuffer);
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