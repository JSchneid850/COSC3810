const express = require('express');
const bodyParser = require('body-parser')
const apiRouter = require('./services/apiRouter');
const app = express();


//update api calls latter
app.use('/api', apiRouter);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);