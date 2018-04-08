const mongoose = require('mongoose');
const seedData = require('./seed.json');
const UserModel = require('./schema/user.schema');
const q = require('q');

const CONN_STRING = 'mongodb://localhost:27017/learntocode';

function deleteAllCollections() {
    const deferred = q.defer();

    mongoose.connection.db.listCollections().toArray((err, collections) => {
        if (err) {
            deferred.reject(err);
        }
        const promises = collections.map(c => {
            console.log(`Dropping Collection :: ${c.name}`);
            return mongoose.connection.db.dropCollection(c.name);
        });
        Promise
            .all(promises)
            .then(deferred.resolve)
            .catch(deferred.reject);
    });

    return deferred.promise;
}

function insertCollections() {
    const deferred = q.defer();

    const promises = seedData.collections.map(c => {
        console.log(`Creating Collection :: ${c.name}`);
        console.log(`Inserting Models :: ${c.models.map(c => c.username).join(', ')}`);
        return UserModel.insertMany(c.models);
    });

    Promise
        .all(promises)
        .then(deferred.resolve)
        .catch(deferred.reject);

    return deferred.promise;
}

function closeConnection() {
    return mongoose.connection.close();
}

mongoose.connect(CONN_STRING)
    .then(deleteAllCollections)
    .then(insertCollections)
    .then(closeConnection)
    .then(() => { console.log('Seeding Completed Successfully') })
    .catch(console.error);

/*mongoose.connect(CONN_STRING)
    .then(connection => {
        console.log(mongoose.connection.db.listCollections);
        mongoose.connection.close();
        const promises = seedData.collections.map(c => {
            const name = c.name;
            const models = c.models;
            const collection = mongoose.model(name);
            return collection.insertMany(models);
        });

        Promise.all(promises).then(() => {
            console.log('Seeding Cmpleted Successfully');
            mongoose.connection.close();
        });
    })
    .catch(error => {
        console.log(error.message);
        process.exit();
    });*/