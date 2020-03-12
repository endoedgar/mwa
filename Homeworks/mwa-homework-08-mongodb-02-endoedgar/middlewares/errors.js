module.exports.logErrors = (err, req, res, next) => {
    console.error(err);
    next(err);
}

module.exports.handleErrors = (err, req, res, next) => {
    const status = typeof err === "object" && "code" in err ? err.code : 500;

    res.status(status).send(err);
}