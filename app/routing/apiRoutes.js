// Linking our routes to a "friends data sources.
// ===============================================================================
var friendsList = require("../data/friends");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // when a user submits form data (a JSON object)
    // the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function(req, res) {
        // When submit button is pushed, the person data is added tto the friendsList in json format.
        friendsList.push(req.body);
        res.json();
    });

};