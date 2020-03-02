const multer = require('multer');
const { user_pic_folder, user_pic_max_size } = require('../config.json');

function fileIsJpeg({mimetype, originalname}) {
    return mimetype === 'image/jpeg' && originalname.match(/\.(jpg|jpeg)$/i);
}

const upload = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => cb(null, user_pic_folder),
        filename: (req, file, cb) => cb(null, req.start + '.jpg')
    }),
    fileFilter: 
        (req, file, cb) => 
            fileIsJpeg(file) ? 
                cb(null, true) : 
                cb(new Error('Invalid file or mime type (jpg expected)')), 
    limits: { 
        fileSize: user_pic_max_size
    }
});

module.exports.fileUpload = function(req, res, next) {
    req.start = Math.round((new Date()).getTime() / 1000);
    upload.single('picture')(req, res, err => { (err) ? next(err) : next(); });
}