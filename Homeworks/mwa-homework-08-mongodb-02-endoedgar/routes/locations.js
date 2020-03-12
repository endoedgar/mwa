const { Router, json } = require('express');

const validLocation = require('../middlewares/validLocation');
const locationsController = require('../controllers/locations');

const router = Router();

router.post('/', json(), validLocation, async function(req, res, next) {
    try {
        await locationsController.insertOne(req.body);
        res.status(201).send({ message: "Location created!" });
    } catch(err) {
        next(err);
    }
});

router.get('/', async function(req, res, next) {
    try {
        if(typeof req.query.type === "string" && req.query.type == "nearest") {
            if(typeof req.query.category === "string") {
                res.status(200).send(await locationsController.findNearestPoints(req.query.category, 3));
            } else {
                throw { code: 400, message: "category expected!"};
            }
        } else {
            res.send(await locationsController.find());
        }
    } catch(err) {
        next(err);
    }
})

module.exports = router;