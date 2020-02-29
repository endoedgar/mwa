const { cpus } = require('os');
const { isMaster, fork } = require('cluster');

if(isMaster) {
    const units = cpus();
    for(unit of units) {
        fork();
    }
} else {
    require('./server');
}