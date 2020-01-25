const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
// app.use(express.static(__dirname + '/dist/Angular10'));
app.use(express.static(__dirname + '/src));

// Send all requests to index.html
app.get('/*', function(req, res) {
    // res.sendFile(path.join(__dirname + '/dist/Angular10/index.html'));
    res.sendFile(path.join(__dirname + '/src'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);