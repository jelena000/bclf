const express = require('express');
const bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
//app.use(express.static(__dirname + '/public'));
//app.use(express.methodOverride());
//app.use(express.multipart());



const api = require('./routes/api');
app.use('/api', api);
app.use('/uploads', express.static('uploads'));

const port = 5000;

app.listen(port, () => console.log("running 5000"));




