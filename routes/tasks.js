var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/geodata');

// Get All Tasks
router.get('/getCoordinates', function(req, res, next){
    db.geodata.find({}).sort({_id:-1}).limit(10).skip(0, function(err, tasks){
        if(err){
            res.send(err);
        }
        console.log(res.json(tasks));
    });
});

//Save Task
router.get('/setCoordinates', function(req, res, next){
    db.geodata.save(req.query, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
    });
});

module.exports = router;