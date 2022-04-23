const express = require('express');
const path = require('path');
const cors = require('cors');
const ip = require('ip');
const port = 9099;

const app = express();
const address = ip.address();

app.use(cors({origin: '*'}))

app.use(express.static(path.join(__dirname, "../build")))

app.get('/*', function (req, res){
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(port, address, ()=>{
  console.log(`Now My Sever Start at: \n http://${address}:${port}`)
})