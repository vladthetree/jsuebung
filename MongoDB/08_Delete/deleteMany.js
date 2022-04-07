var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


/*
Delete all documents were the address starts with the letter "a":
 */
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = {address: /^a/};
    dbo.collection("customers").deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});