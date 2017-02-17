let mongo = require("mongodb");
let assert = require("assert");
let MongoClient = mongo.MongoClient;
let url = "mongodb://localhost:27017/geodata";
let locResults = [];

export module Database {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Successful connection to the server");

        let collection = db.collection('geodata');

        collection.find().toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);

        locResults = docs;
        });      

        db.close();
        return locResults;
    })
}