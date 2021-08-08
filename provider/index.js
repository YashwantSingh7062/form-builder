const mongoose = require("mongoose");
let connection;

class mongoQuery {
    getDb(schema) {
        return new Promise((resolve, reject) => {
            let modelSchema;
            if (connection != null) {
                modelSchema = require(`./model/${schema}`);
                return resolve(modelSchema);
            } else {
                connection = mongoose.connection;
                connection.on("error", (err) => {
                    console.log("error", "Unable to connect to database!");
                    return reject(err);
                });
                connection.once("open", () => {
                    console.log("info", "Connected to database successfully.");
                    modelSchema = require(`./model/${schema}`);
                    return resolve(modelSchema);
                });
            }
        });
    }

    findOne(collectionName, query, projection, populate) {
        return new Promise((resolve, reject) => {
            this.getDb(collectionName)
                .then((collection) => {
                    collection
                        .findOne(query, projection)
                        .populate(populate)
                        .exec((err, result) => {
                            if (err) return reject(err);
                            return resolve(result);
                        });
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }

    find(collectionName, query, projection, populate) {
        return new Promise((resolve, reject) => {
            this.getDb(collectionName)
                .then((collection) => {
                    collection
                        .find(query, projection)
                        .populate(populate)
                        .exec((err, result) => {
                            if (err) return reject(err);
                            return resolve(result);
                        });
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }


    aggregate(collectionName, query, populate) {
        return new Promise((resolve, reject) => {
            this.getDb(collectionName)
                .then((collection) => {
                    collection.aggregate(query).exec((err, result) => {
                        if (err) return reject(err);
                        collection.populate(result, { path: populate }, (error, res) => {
                            if (err) return reject(error);
                            return resolve(res);
                        });
                    });
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }

    save(collectionName, data) {
        return new Promise((resolve, reject) => {
            this.getDb(collectionName)
                .then((collection) => {
                    let newModel = new collection(data);
                    newModel.save((err, saved) => {
                        if (err) return reject(err);
                        return resolve(saved);
                    });
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }

    insertMany(collectionName, data) {
        return new Promise((resolve, reject) => {
            this.getDb(collectionName)
                .then(async (collection) => {
                    let inserted = collection.insertMany(data);
                    return resolve(inserted);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }

    findOneAndUpdate(collectionName, query, update, option) {
        return new Promise((resolve, reject) => {
            this.getDb(collectionName)
                .then((collection) => {
                    collection.findOneAndUpdate(query, update, option, (err, result) => {
                        if (err) return reject(err);
                        return resolve(result);
                    });
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }
}

module.exports = new mongoQuery();
