const connection = require('../middlewares/connection');
const config = require('../config.json');

module.exports.insertOne = async (location) => {
    return connection.get().db().collection('locations').insertOne(location);
}

module.exports.find = async () => {
    return connection.get().db().collection('locations').find({}).toArray();
}

module.exports.findNearestPoints = async (category, limit) => {
    return connection.get().db().collection('locations').find({ location: {$near: config.MIULocation}, category}).limit(limit).toArray();
}