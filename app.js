'use strict'
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
/*
var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Welcome to Express My App Ahmad Nasikin')
})

app.get('/user', function(req, res) {
  res.send({
    user_name: 'Ahmad Nasikin',
    password: 1234455,
    email: 'hactiv8@hacktiv8.com'
  })
})

app.get('/cities', function(req, res) {
  res.send({
    nama: 'Magelang',
    province: 'Jawa Tengah'
  })
})

app.listen(3000)
*/

var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('main')
})

app.get('/users', function(req, res) {
  let fs = require('fs')
  let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
  res.render('users', {data_ambil: data})
})

app.get('/cities', function(req, res) {
  let fs = require('fs')
  let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
  res.render('cities', {data_ambil: data})
})

app.listen(3000)
