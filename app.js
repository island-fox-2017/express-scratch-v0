/*
============= RELEASE 0 =============
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Welcome to Express My App [Budhi Priyatmojo]')
})

app.get('/users', function(req, res) {
  var userObj = {
    nama : 'Anto',
    jenis_kelamin : 'Laki-laki',
    pekerjaan : 'Koki'
  }
  res.send({pesan: userObj})
})

app.get('/cities', function(req, res) {
  var cityObj = {
    nama_kota : 'Bogor',
    provinsi : 'Jawa Barat',
    pulau : 'Jawa'
  }
  res.send({pesan: cityObj})
})

app.listen(3000)
*/


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
*/

var express = require ('express')
var path = require ('path')
var fs = require ('fs')

var app = express();

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req, res) {
  res.send('Welcome to Express My App [Budhi Priyatmojo]')
})

app.get('/users', function(req, res) {
  let readUserData = fs.readFileSync('data.json', 'utf8')
  let usersObj = JSON.parse(readUserData)
  res.render('users', {userdata: usersObj})
})

app.get('/cities', function(req, res) {
  let readCityData = fs.readFileSync('data.json', 'utf8')
  let citiesObj = JSON.parse(readCityData)
  res.render('cities', {citydata: citiesObj})
})

app.listen(3000);

/*
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
