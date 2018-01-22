const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/api', require('./api'));

const port = process.env.NODE_PORT || 9000;  

app.listen(port, () => {
    console.log(`The server is listening on the port ${port}`);
});