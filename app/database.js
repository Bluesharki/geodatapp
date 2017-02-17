"use strict";
var mongo = require("mongodb");
var assert = require("assert");
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/geodata";
var locResults = [];
var Database;
(function (Database) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Successful connection to the server");
        var collection = db.collection('geodata');
        collection.find().toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            locResults = docs;
        });
        db.close();
        return locResults;
    });
})(Database = exports.Database || (exports.Database = {}));
//# sourceMappingURL=database.js.map