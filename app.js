/** EXPRESS FROM SCRATCH V.0
---------------------------
Buatlah sebuah aplikasi sederhana menggunakan Express JS

- Release 0
Buatlah 3 routing yang memenuhi spesifikasi berikut ini :

URL --> http://localhost:3000/
menampilkan "Welcome to Express My App [Nama_Kalian]"

URL --> http://localhost:3000/users
menampilkan data users berupa object. di release ini object dibuat manual,
silakan menentukan property dan value dari object tersebut asalkan relevan dengan user

URL --> http://localhost:3000/cities
menampilkan data cities berupa object.
silakan menentukan property dan value dari object cities juga untuk release 0 ini.


- Release 1
Buatlah file data.json yang isinya ada 2 object yaitu users dan cities.
contoh :
{
  users: [{
    username: 'hacktiv8',
    password: 'hacktiv8',
    email: 'hactiv8@hacktiv8.com'
  }, {
    username: 'johndoe',
    password: '12345',
    email: 'john@doe.com'
  }],
  cities: [{
    name: 'Jakarta'
    province: 'DKI Jakarta'
  }, {
    name: 'Bandung'
    province: 'Jawa Barat'
  }]
}

Setelah itu, buatlah code untuk membaca file dari data.json
sehingga routing yang tadinya menampilkan object yang dibuat sendiri,
sekarang menampilkan data yang ada di-file data.json menggunakan view engine .ejs
**/

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
