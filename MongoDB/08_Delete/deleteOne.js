var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var mySquery = {adress: "adressValue2"};
    dbo.collection("customers")
        .deleteOne(mySquery, function (err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            db.close();
        })
})