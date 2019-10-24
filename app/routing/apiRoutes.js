// included package
var path = require('path');

// import friends array
var friends = require('../data/friends.js');

// export API
module.exports = function(app) {
    // console.log('___ENTER apiRoutes.js');
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // add new friends
    app.post('/api/friends', function(req, res) {
        // get user input
        var userInput = req.body;
         console.log('userInput = ' + JSON.stringify(userInput));

        var userResponses = userInput.scores;
         console.log('userResponses = ' + userResponses);

        // compute who the best match is
        var matchName = '';
        var matchImage = '';
        var totalDifference = 1000; // make this high for a better comparison

        // loop through all possible friends
        for (var i = 0; i < friends.length; i++) {
            console.log('friend = ' + JSON.stringify(friends[i]));

            // compute the differences between each question
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            console.log('diff = ' + diff);

            // whichever friend has the lowest difference record that friend
            if (diff < totalDifference) {
                 console.log('Closest match found = ' + diff);
                 console.log('Friend name = ' + friends[i].name);
                 console.log('Friend image = ' + friends[i].photo);
                
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        // add new friend
        friends.push(userInput);

        // send response
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });
};
