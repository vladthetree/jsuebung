var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = {address: "adressValue2"};
    var newvalue = {$set: {name: "nameValue999", address: "adressValue999"}};
    dbo.collection("customers").updateOne(myquery, newvalue, function (err, res) {
        console.log("1 document updated");
        console.log(res);
        db.close;
    });
});