var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*
    To limit the result in MongoDB, we use the limit() method.

    The limit() method takes one parameter,
    a number defining how many documents to return.

    Consider you have a "customers" collection:
 */

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers")
        .find().limit(2)
        .toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});