module.exports.treat_user_in_req_body = function(req, res, next) {
    const user = req.body.user;

    if(typeof user === 'undefined')
        return next(new Error("An user is required!"));

    try { req.body = JSON.parse(user); } catch(e) { return next(e); }

    next();
};

module.exports.validate_user = function(req, res, next) {
    const requiredProperties = ['id', 'name', 'course', 'grade'];
    
    const missingProperties = 
        requiredProperties.filter(p => !(p in req.body));

    if(missingProperties.length)
        return next(new Error(`The following required user fields are missing: ${missingProperties.join()}`));
    
    if(req.file && req.file.filename)
        req.body.picture = req.file.filename;
    
    next();
}