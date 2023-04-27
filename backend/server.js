const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./services/apiRouter');
const app = express();
var cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use(bodyParser.json({limit: '50mb'}))

app.use('/api', apiRouter);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.listen(process.env.PORT || 8080);