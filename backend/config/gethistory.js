const { filter } = require('async');
const dbConnect = require('./dbconnection.js');
const getDataformDb = async (location,fromDate, toDate) => {
    console.log(location,fromDate, toDate)
    const db = await dbConnect.mongoDbConnection();
    let query = {
        time: {
            $gte: (fromDate),
            $lte: (toDate)
        },
        location: location
    }
    const data = await db.find(query).project({
        _id: 0, 
        Current_temp: 1,
        Whether_icon: 1,
        time: 1
    }).toArray();

    const formattedData = data.map((e) => {
        let date = new Date(e.time);
        let hours = date.getHours();
        let minutes = String(date.getMinutes()).padStart(2, '0'); 

        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? String(hours).padStart(2, '0') : '12'; 
        
        return {
            Current_temp: e.Current_temp,
            Whether_icon: e.Whether_icon,
            time: `${hours}:${minutes} ${ampm}` 
        };
    });

    return formattedData;
}

module.exports = {
    getDataformDb
}


