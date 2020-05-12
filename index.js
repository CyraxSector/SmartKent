const express = require('express');
const app = express();

// reply to request with "Hello World!"
app.get('/smartkent/liftsimulation/', (req, res) => {
  let fromFloor = req.query.fromFloor;
  let toFloor = req.query.toFloor;
  var numberoffloors =Math.abs((Number(toFloor)-Number(fromFloor)));
  var estimatedtime = (numberoffloors * 3);
  res.json({"ETA":estimatedtime.toString()});
});

// start a server on port 8080
const server = app.listen(8090, () => {
  const port = server.address().port;
  console.log('Example app listening on port', port)
});