const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.use(cors()); // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests

// Setup routes for backend REST API
var router = express.Router();
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

var apiRoutes = require('./src/dao/api-route');

app.use('/api',router, apiRoutes);

var MONGODB_URI = 'mongodb://weathertrackadmin:admin1234@ds133281.mlab.com:33281/weathertrack';

mongoose.connect(MONGODB_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Database connection ready");

    // Initialize the app.
    app.listen(app.get('port'), function () {
        console.log("You're a wizard, Harry. I'm a what? Yes, a wizard, on port", app.get('port'));
    });
});