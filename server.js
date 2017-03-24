var express = require('express')
var app = express()
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']


app.get('/:str', function (req, res) {
  
  var param = req.params.str
  
  if(isNaN(param)){
    var date = new Date(param)
  } else {
    var date = new Date(parseInt(param)*1000)  
  }
  
  var result = {}
  
  var strDate = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
  
  result.unix = date.getTime()
  result.natural = strDate
  
  res.send(JSON.stringify(result))
  
})

app.listen(8080)