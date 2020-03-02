const { Router } = require('express');

const { getUser, getUsers, deleteUser, postUser } = require('../controllers/users');
const { fileUpload } = require('../middlewares/upload');
const { treat_user_in_req_body, validate_user } = require('../middlewares/user_middlewares');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json(getUsers());
});

router.post('/', fileUpload, treat_user_in_req_body, validate_user, (req, res) => {
    const user = req.body;
    
    postUser(user);

    res.status(201).json(user);
});

router.get('/:userId', (req, res) => {
    const user = getUser(req.params.userId);
    if(typeof user !== 'undefined')
        res.status(200).json(user);
    else
        res.status(404).json({ message: "User not found."} );
});

router.delete('/:userId', (req, res) => {
    deleteUser(req.params.userId);
    res.status(200).json({ message: "User deleted successfully." })
});

module.exports = router;