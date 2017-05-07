var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CitySchema   = new Schema({
    _id: Number,
    name: String,
    selected: Boolean

});

module.exports = mongoose.model('City', CitySchema);