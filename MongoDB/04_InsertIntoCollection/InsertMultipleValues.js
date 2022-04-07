/*
    To insert multiple documents into a collection in MongoDB,
    we use the insertMany() method.

    The first parameter of the insertMany() method is an array of objects,
    containing the data you want to insert.

    It also takes a callback function where you can work with any errors,
    or the result of the insertion:
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        {name: "nameValue2", adress: "adressValue2"},
        {name: "nameValue3", adress: "adressValue3"},
        {name: "nameValue4", adress: "adressValue4"},
        {name: "nameValue5", adress: "adressValue5"},
    ];
    dbo.collection("customers").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});
