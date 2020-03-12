const MongoClient = require('mongodb').MongoClient

const { mongoDbURL } = require('../config.json');

let dbVariable;

module.exports.get = () => dbVariable;

module.exports.middleware = async function(req, res, next) {
    try {
        if(!dbVariable) {
            dbVariable = await MongoClient.connect(
                mongoDbURL, 
                {
                    bufferMaxEntries:   0,
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            );
            console.log("Mongodb connected. ");
        }
        req.db = dbVariable;
        next();
    } catch(err) {
        next(err);
    }
}