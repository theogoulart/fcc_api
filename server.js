var express = require('express')
var app = express()

app.get('/:str', function (req, res) {
  
  var date = new Date(req.params.str)
  var result = {}
  
  result.unix = date.getTime()
  result.natural = date.toDateString()
  
  res.send(JSON.stringify(result))
  
})

app.listen(8080)