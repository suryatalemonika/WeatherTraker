const express = require('express');
const { getData } = require('./wheterData/fetch');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    getData(req,res);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

