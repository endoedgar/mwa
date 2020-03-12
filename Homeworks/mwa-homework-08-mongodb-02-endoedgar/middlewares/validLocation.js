const validate = require('jsonschema').validate;
const { locationSchema } = require('../config.json');

module.exports = function(req, res, next) {
    const result = validate(req.body, locationSchema);
    
    if(result.errors.length > 0)
        return next({ code: 400, message: result.errors.toString()})
    
    next();
}