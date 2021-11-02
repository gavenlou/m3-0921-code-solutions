const express = require('express');
const path = require('path');

const app = express();
const absolute = path.join(__dirname, '/public');
app.use(express.static(absolute));

app.get('/', function (req, res) {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
