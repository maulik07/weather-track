var express = require('express');
var router = express.Router();

var City = require('./models/city');

router.get('/get-cities', function(req, res){
    City.find({selected: false}, function(err, cities) {
        if(err) throw err;
        res.send(cities);
    });
});

router.get('/get-selected-cities', function(req, res){
    City.find({selected: true}, function(err, cities) {
        if(err) throw err;
        res.send(cities);
    });
});

router.get('/get-selected-cities', function(req, res){
    City.find({selected: true}, function(err, cities) {
        if(err) throw err;
        res.send(cities);
    });
});

router.get('/track-city/:id', function(req, res){
    var id = req.params.id;
    City.findByIdAndUpdate(id, {selected: true}, function(err, city) {
        if(err) throw err;
        res.send('{"message": "Success"}');
    });    
});



module.exports = router;