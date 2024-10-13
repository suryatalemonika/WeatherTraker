const express = require('express');
const path = require('path')
const { getData, getDailyData } = require('./wheterData/fetch');
const app = express();
const port = 3000;
app.use(express.static(path.join('/home/developers/WeatherTraker/', 'frontend')));

app.use(express.json());

app.get('/weather', (req, res) => {
    getData(req,res);
})

app.get('/historydata/:city',(req,res)=>{
   // let {from, to } = req.body;
   console.log(req.params)
    getDailyData(req,res,req.params.city);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

