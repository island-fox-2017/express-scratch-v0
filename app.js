const express = require('express')
var app = express()
var path = require('path')
const fs = require('fs')
// let data = require('./data.json')

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.send('Welcome to Express My App PDVega')
})

/*release 0
app.get('/users', function(req, res){
  var objUser = {
    user : 'pdvega',
    email : 'pdvegaa@gmail.com'
  }
  res.send(`${JSON.stringify(objUser, null, 2)}`) //Release 0
})

app.get('/cities', function(req, res){
  var objCity = {
    name : 'Bekasi',
    province : 'Jawa Barat'
  }
  res.send(`${JSON.stringify(objCity, null, 2)}`)
})
*/

app.locals.data = require('./data.json')

//release 1
app.get('/users', function(req, res){
  res.render('users', {})
})

app.get('/cities', function(req, res){
  let objData = JSON.parse(fs.readFileSync('data.json', 'utf8'))
  res.render('cities', {title:'cities', data : objData.cities})
})



app.listen(3000)
