// index.js
const express = require('express');
const app = express();
var os = require('os');
var hostname = os.hostname();
app.get('/', (req, res) =>  {      
   console.log('I just received a GET request on port 3000!');
   res.send(hostname);
});
app.listen(3000, () => console.log('I just connected on port 3000!'));