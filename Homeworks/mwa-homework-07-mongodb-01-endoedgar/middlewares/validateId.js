const mongo = require('mongodb');

module.exports = function(req, res, next) {
    if(typeof (req.params.id) === 'undefined')
        return next(new Error('Param ID is required!'))

    try { req.params.id = mongo.ObjectID(req.params.id) } catch (err) { return next(err); }

    next();
} 