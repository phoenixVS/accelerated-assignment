const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');
const url = "mongodb://localhost:27017/";

// NB: To run this code you need to start mongo db instance locally on port 27017
// Use local db cluster or docker instance for that purpose
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // First, let's create a MongoDB database named "testdb" and a collection called "users"
  var dbo = db.db("testdb");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Users collection created!");

    // Then add a new user to the "users" collection with the specified information. 
    // For this, we'll also need to generate a JWT
    const user = { name: 'John Doe' };
    const accessToken = jwt.sign(user, 'yourSecretKey');
  
    var myobj = { 
      name: "John Doe", 
      email: "john.doe@example.com",
      password: "password123",
      token: accessToken 
    };

    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("User inserted");

      // Retrieve users
      var query = { email: /\.example\.com$/ };
      dbo.collection("users").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    });
  });
});