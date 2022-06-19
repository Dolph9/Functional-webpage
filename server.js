//building node js server:

const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.use(express.static(__dirname + '/public'))
app.use('/', router);

const hostname = 'Dariens-MBP';
const port = 8000;

app.listen(process.env.port || port)
console.log(`Running at Port ${port}`);
console.log(__dirname, " <-- this is the dirname")
