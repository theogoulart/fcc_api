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
  
  if(months[date.getMonth()]!==undefined){
    result.unix = date.getTime()
    result.natural = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
  } else {
      result.unix = null
      result.natural = null
  }
  
  res.send(JSON.stringify(result))
  
})

app.listen(8080)