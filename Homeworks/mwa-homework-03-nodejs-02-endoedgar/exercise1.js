const dns = require('dns');
const { promisify } = require('util');

async function resolveAndLog(address) {
    try {
        const resolveAsync = promisify(dns.resolve4);
        const ipv4 = await resolveAsync(address);
        console.log(ipv4);
    } catch (err) {
        console.error(err);
    } 
}

resolveAndLog('www.mixxu.edu');
