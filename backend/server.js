const express = require('express');
const path = require('path')
const { getData } = require('./wheterData/fetch');
const trigerscheduler = require('./config/schedulers');
const { getDataformDb } = require('./config/gethistory');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join('/home/developers/WeatherTraker/', 'frontend')));

app.use(express.json());

app.get('/weather', (req, res) => {
    getData(false, req, res);
})

app.get('/historydata', (req, res) => {
    getDataformDb(req.query.location,req.query.from, req.query.to).then((resobj) => {
        console.log(`success res : ${JSON.stringify(resobj)}`)
        res.json(resobj);
    }).catch((err) => {
        res.json({ msg: `got error ${err}` })
        console.log(`error got ${err}`)
    })
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

