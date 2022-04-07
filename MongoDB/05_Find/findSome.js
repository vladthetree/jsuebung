var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

/*
    The second parameter of the find() method is the projection
    object that describes which fields to include in the result.

    This parameter is optional, and if omitted, all fields will be included in the result.
 */
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers")
//         .find({}, {projection: {_id: 0, name: 1, adress: 1}})
//         .toArray(function (err, result) {
//             if (err) throw err;
//             console.log(result);
//             db.close();
//         })
// })


//----This example will exclude "address" from the result:
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers")
//         .find({}, { projection: { address: 0 } })
//         .toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });


//---This example will return only the "name" field:
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers")
        .find({}, { projection: { _id: 0, name: 1 } })
        .toArray(function(err, result) {
        if (err) throw err;
        console.log(result[3].name) // gives back single output
        // console.log(result);
        db.close();
    });
});

