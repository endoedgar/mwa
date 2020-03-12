const MongoClient = require('mongodb').MongoClient

let db;

module.exports = async function(req, res, next) {
    try {
        if(!db)
            db = await MongoClient.connect(
                'mongodb://127.0.0.1:27017/homework07', 
                {
                    bufferMaxEntries:   0,
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            );
        req.db = db;
        next();
    } catch(err) {
        next(err);
    }
} 