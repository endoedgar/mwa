const { Router } = require('express');
const { json } = require('express');

const validateId = require('../middlewares/validateId')
const validateLecture = require('../middlewares/validateLecture')
const lecturesController = require('../controller/lectures');

const router = Router();

router.get('/', async (req, res) => {
    lecturesController.setConnection(req.db);
    res.send(await lecturesController.find())
});
router.post('/', json(), validateLecture, async (req, res) => {
    lecturesController.setConnection(req.db);
    res.status(201).send(await lecturesController.post(req.body))
});
router.get('/:id', validateId, async (req, res) => {
    lecturesController.setConnection(req.db);
    const lecture = await lecturesController.findOne(req.params.id);
    lecture ? res.send(lecture) : res.status(404).send({ message: "Lecture not found." });
});
router.delete('/:id', validateId, async (req, res) => {
    lecturesController.setConnection(req.db);
    res.send(await lecturesController.deleteOne(req.params.id))
});
router.get('/search/:q', async (req, res) => {
    lecturesController.setConnection(req.db);
    res.send(await lecturesController.search(req.params.q))
});

module.exports = router;