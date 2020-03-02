const { MulterError } = require('multer');

function handleClientMulterError(err, req, res, next) {
    const mapCorrectStatus = {
        'LIMIT_FILE_SIZE': 422
    };

    const httpStatus = mapCorrectStatus[err.code] || 500;
    
    res.status(httpStatus).json({ 
        status: 'MulterError',
        message: err.message,
        field: err.field
    });
}

function handleSyntaxErrors({ message }, req, res, next) {
    res.status(400).json({ 
        status: 'SyntaxError',
        message
    });
}

module.exports.logErrors = (err, req, res, next) => {
    console.error(err);
    next(err);
}

module.exports.clientErrorHandler = (err, req, res, next) => {
    if(err instanceof MulterError) {
        handleClientMulterError(err, req, res, next);
    } else if(err instanceof SyntaxError) {
        handleSyntaxErrors(err, req, res, next);
    } else if(err instanceof Error) {
        res.status(400).json({ 
            status: err.name,
            message: err.message
        });
    } else {
        return next(err);
    }
}

module.exports.errorHandler = (err, req, res, next) => {
    res.status(500).json({ 
        status: err.name,
        message: "Internal server error."
    });
}