var express = require ('express')
var path = require('path');
var app = express()
var fs = require ('fs')
var data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
app.set('view engine', 'ejs');

app.get('/',function (req, res) {
  res.send ('Welcome to Express My App Teja Harsoni')
})

app.get('/users', function (req, res) {
  // RELEASE 0
  // var obj = {"Nama" : "Teja Harsoni", "Lahir" : "Sumedang"}
  //
  //
  // res.render('users', {obj_user: obj})
  //

res.render('users',{data})

})

app.get('/cities', function (req, res){
// RELEASE 0
  // var obj = {"Kota":"Jakarta"}
  //
  // res.render('cities', {obj_kota: obj})

res.render('cities',{data})


})

app.listen(3000)
