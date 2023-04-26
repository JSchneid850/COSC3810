const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./services/apiRouter');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.use('/api', apiRouter);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.listen(process.env.PORT || 8080);