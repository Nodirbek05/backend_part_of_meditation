var express = require('express');
var SomeModelSchema = require('../schema/schema');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
    var data = await SomeModelSchema.find({});
    res.json(data);
    res.end();
});

router.post('/', async (req, res, next) => {
    var data = await SomeModelSchema.create({
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
    });
    res.send(data);
});


router.patch('/', async (req, res, next) => {
    var data = await SomeModelSchema.findOneAndUpdate(
        {
            name: req.body.oldName,
        },
        {
            name: req.body.name,
            image: req.body.image,
            caltegory: req.body.category,
        }, ({ new: true }));
    res.send(data);
});

router.delete('/', async (req, res, next) => {
    var data = await SomeModelSchema.findOneAndDelete(
        {
            name: req.body.oldName,
        }
    );
    res.send(data);
});


module.exports = router;
