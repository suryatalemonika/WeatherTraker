const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
let database = 'weatherData';
const collectionName = 'history'

const mongoDbConnection = async () => {
    let connected = await client.connect();
    let db = connected.db(database)
    let result = db.collection(collectionName);
    return result;
}

module.exports = {
    mongoDbConnection
}