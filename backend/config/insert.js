const dbConnect = require('./dbconnection');

const insertData = async (datatoinsert) => {
    let data = await dbConnect.mongoDbConnection();
    let result = await data.insertOne(datatoinsert);
    return result;
}


module.exports = {
    insertData
}
