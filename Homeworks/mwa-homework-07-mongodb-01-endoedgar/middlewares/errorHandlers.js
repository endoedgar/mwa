module.exports.logErrors = (err, req, res, next) => {
    console.error(err);
    next(err);
};

module.exports.handleErrors = (err, req, res, next) => {
    res.status(500).send({ message: err.toString() });
};