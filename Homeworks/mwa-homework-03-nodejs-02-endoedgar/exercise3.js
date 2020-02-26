const os = require('os');

(async function checkSystem() {
    try {
        console.log("Checking your system…");
        const message = await new Promise(function(resolve, reject) {
            if(os.totalmem() < 4*(1024^3))
                reject("This app needs at least 4 GB of RAM");
            else if(os.cpus().length > 2)
                reject("Processor is not supported");
            else
                resolve("System is checked successfully.");
        });
        console.log(message);
    } catch(err) {
        console.error(err);
    }
})();