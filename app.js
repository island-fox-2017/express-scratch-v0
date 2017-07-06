var express = require('express')
var app = express()

var fs = require('fs');
var options = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Welcome to Express My App Rahmat Hidayat')
})

//Release 0
// app.get('/users', function(req, res){
//   var objUser = {
//     username: 'Rahid',
//     duties: ['study', 'coding']
//   }
//   res.send(JSON.stringify(objUser))
// })
//
// app.get('/cities', function(req, res){
//   var city = {
//     name: 'Jakarta',
//     post_code: '12345'
//   }
//   res.send(JSON.stringify(city))
// })

//Release 1
app.get('/users', function (req, res) {
  res.render('users', {pesan: JSON.stringify(options['users'])})
})

app.get('/cities', function (req, res) {
  res.render('cities', {pesan: JSON.stringify(options['cities'])})
})

app.listen(3000)
