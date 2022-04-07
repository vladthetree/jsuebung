/*
    To insert a record, or document as it is called in MongoDB,
    into a collection, we use the insertOne() method.
    The first parameter of the insertOne() method is an object containing the name(s)
    and value(s) of each field in the document you want to insert.

    It also takes a callback function where you can work with any errors,
    or the result of the insertion:
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {name: "nameValue", adress: "adressValue"};
    dbo.collection("customers")
        .insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 Document inserted!");
        db.close();
    });
});
/*
    Note: If you try to insert documents in a collection that do not exist,
    MongoDB will create the collection automatically.
 */

