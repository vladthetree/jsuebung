var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
/*
    To select data from a table in MongoDB, we can also use the find() method.
    The find() method returns all occurrences in the selection.
    The first parameter of the find() method is a query object. In this example we use an empty query object,
    which selects all documents in the collection.
 */
// No parameters in the find() method gives you the same result as SELECT * in MySQL.

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});