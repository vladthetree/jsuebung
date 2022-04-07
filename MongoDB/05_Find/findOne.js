var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


/*
    The findOne() method returns the first occurrence in the selection.

The first parameter of the findOne() method is a query object.
In this example we use an empty query object, which selects all documents in a collection
(but returns only the first document).
 */

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});