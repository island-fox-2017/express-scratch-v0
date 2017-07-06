// var express = require('express')
// var app = express()
//
// app.set('view engine', 'ejs');
//
// app.get('/', function(req, res){
//   res.send('Welcome to Express My App Anggraito')
// })
// app.get('/users', function(req, res){
//   var data_user = {
//     name : "Anggi",
//     work : "undefined job",
//     email : "anggi@email.com"
//   }
//   res.send(`Nama saya adalah ${data_user.name} pekerjaan yang saya lakukan ${data_user.work}. silahkan kirim email ke ${data_user.email}`)
// })
// app.get('/cities', function(req, res){
//   var data_city ={
//     name : "Jakarta",
//     province : "DKI Jakarta"
//   }
//   res.send(`Berdomisili di ${data_city.name} provinsi ${data_city.province}`)
// })
//
// app.listen(3000)

var express = require('express')
var path = require('path');
var fs = require('fs');

var data = fs.readFileSync('data.json')
let jsonFile = JSON.parse(data); //with path
// console.log(json);
var app = express()

app.set('view engine', 'ejs');

app.use(express.static(path.join(_dirname, 'public')));

app.get('/', function(req, res){
  res.send('Welcome to Express My App Anggraito')
})
app.get('/users', function(req, res){
  //var data_user = json
  res.render('users', {show:jsonFile.users})
})
app.get('/cities', function(req, res){
  //var data_city = json;
  res.render('cities', {town: jsonFile.cities})
})

app.listen(3000)
