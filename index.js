
var express = require('express')
var bodyParser = require('body-parser')
var ogs = require('open-graph-scraper')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  ogs({ url: req.query.url }, (err, ogsRes)=> {
    res.send(JSON.stringify(ogsRes))
  })
});

var port = process.env.PORT || 8080;
app.listen(port)
