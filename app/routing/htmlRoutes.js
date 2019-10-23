// include packages
var path = require("path");

// export html route
module.exports = function(app) {

    // home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.hhtml'));
    });

    // survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};
