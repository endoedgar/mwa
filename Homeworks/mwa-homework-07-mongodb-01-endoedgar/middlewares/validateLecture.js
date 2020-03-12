const mongo = require('mongodb');

module.exports = function(req, res, next) {
    if(typeof (req.body) !== 'object')
        return next(new Error('Body has to be an object.'))
    
    const requiredFields = ['course', 'lecture'];

    const missingFields = requiredFields.filter(x => !(x in req.body));
    if(missingFields.length > 0)
        next(`Your lecture is missing the following fields: ${missingFields.join()}`);
    
    const weirdFields = Object.keys(req.body).filter(wf => { return !(requiredFields.includes(wf)) });
    if(weirdFields.length > 0)
        next(`Please, remove the following fields from your request: ${weirdFields.join()}`);

    next();
} 