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

'use strict'
var express = require('express')
var app = express()
var ejs = require('ejs')
app.listen(3000)
app.set('view engine', 'ejs')


//-- RELEASE 0
//--
// app.get('/', function(req, res) {
//   res.send('Welcome to Express My App Irianto')
// })
//
// app.get('/users', function(req, res) {
//
//   var usersObj = {username : 'anto', password : 'rahasia'}
//   res.send(usersObj)
// })
//
// app.get('/cities', function(req, res) {
//
//   var citiesObj = {name : 'Jakarta', province : 'DKI Jakarta'}
//   res.send(citiesObj)
// })


// --RELEASE 1
// --
const fs = require('fs')
var dataJson = fs.readFileSync('data.json', 'utf8')
var data = JSON.parse(dataJson)

app.get('/', function(req, res) {
  res.render('welcome', {namaSaya : 'Irianto'})
})

app.get('/users', function(req, res) {
  res.render('users', {dataUser : JSON.stringify(data.users)})
})

app.get('/cities', function(req, res) {
  res.render('cities', {dataCity : JSON.stringify(data.cities)})
})
