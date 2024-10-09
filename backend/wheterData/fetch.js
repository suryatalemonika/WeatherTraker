const axios = require('axios');

const getData = (req,res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=b5205b77e42452cf134884a136fc3470&units=metric"
    axios.get(url).then((result) => {
        console.log(`Response from Whether API : ${JSON.stringify(result.data)}`)
        res.json(result.data);
    }).catch((error) => {
        res.json({msg: `got error ${error}`})
        console.log(`Error response form whether API error ${error}`)
    })
}

module.exports = {
    getData
}