const axios = require('axios');
const key = 'b5205b77e42452cf134884a136fc3470'
const fs = require('fs');
const { insertData } = require('../config/insert');
const { getDataformDb } = require('../config/gethistory');
const getData = (flag, req, res) => {
    let userlastlocation = req.query.location
    if (!flag) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${userlastlocation}&appid=${key}&units=metric`
        console.log(url)
        axios.get(url).then((result) => {
            let sunset = `${new Date(result.data.sys.sunset).getHours()}:${new Date(result.data.sys.sunset).getMinutes()}`
            let clientres = {
                Current_temp: result.data.main.temp,
                Weather_description: result.data.weather[0].description,
                Whether_icon: result.data.weather[0].icon,
                feels_like: result.data.main.feels_like,
                sunset: sunset,
                location: result.data.name
            }
            console.log(`Response send to client : ${JSON.stringify(clientres)}`)
            res.json(clientres);
        }).catch((error) => {
            res.json({ msg: `got error ${error}` })
            console.log(`Error response form whether API flag false error ${error}`)
        })
    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${userlastlocation}&appid=${key}&units=metric`
        console.log(url)
        axios.get(url).then((result) => {
            let sunset = `${new Date(result.data.sys.sunset).getHours()}:${new Date(result.data.sys.sunset).getMinutes()}`
            let clientres = {
                Current_temp: result.data.main.temp,
                Weather_description: result.data.weather[0].description,
                Whether_icon: result.data.weather[0].icon,
                feels_like: result.data.main.feels_like,
                sunset: sunset,
                location: result.data.name,
                time: new Date().toJSON()
            }
            insertData(clientres).then((res)=>{
                console.log(`success ${JSON.stringify(res)}`)
            }).catch((err)=>{
                console.log(`error ${err}`)
            })
        }).catch((error) => {
            console.log(`Error response form whether API error ${error}`)
        })
    }
}


const getLatLong = (city) => {
    try {
        let result = {};
        switch (city) {
            case 'pune':
                result = { lon: 73.8553, lat: 18.5196 }
                break;
            case 'delhi':
                result = { "lon": 77.2167, "lat": 28.6667 }
                break;
            case 'moscow':
                result = { "lon": 37.6156, "lat": 55.7522 }
                break;
            case 'paris':
                result = { "lon": 2.3488, "lat": 48.8534 }
                break;
            case 'new york':
                result = { "lon": -74.006, "lat": 40.7143 }
                break;
            case 'sydney':
                result = { "lon": 151.2073, "lat": -33.8679 }
                break;
            case 'riyadh':
                result = { "lon": 46.7219, "lat": 24.6877 }
                break;
            default:
                console.log(`Data for ${city} not available`);
                break
        }
        return result;
    } catch (error) {

    }
}

module.exports = {
    getData
}