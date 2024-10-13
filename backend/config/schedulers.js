const scheduler = require('node-schedule');

scheduler.Job('newjob','*/1 * * * *',()=>{
    console.log('this will run at every second')
})