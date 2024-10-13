const scheduler = require('node-schedule');
const { getData } = require('../wheterData/fetch');

console.log('triggered schedulers')
scheduler.scheduleJob('1_Hour_Scheduler','0 * * * *',()=>{
    console.log(`this scheduler will run at very hour`)
    getData(true)
})