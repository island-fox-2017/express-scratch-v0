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

const express = require('express')
const app = express()
var myName = 'Adnin Rais'
const ejs = require('ejs')
const fs = require('fs')
var user = {
  name :  'Adnin',
  password :'apa-aja'  ,
  email :'adnin@hacktiv8.com'  ,
}
var cities = {
  name : 'Jakarta Timur',
  post_code : '2180'
}

app.set('view engine', 'ejs')
// release 0
// app.get('/', function (req, res) {
//   res.send(`Welcome to Express My App ${myName}`)
// })
// app.get('/users', function(req ,res) {
//   res.send(JSON.stringify(user))
// })
// app.get('/cities', function(req ,res) {
//   res.send(JSON.stringify(cities))
// })

// release 1
var ambilJson = JSON.parse(fs.readFileSync('data.json', 'utf8')) ;
app.get('/users', function(req ,res) {
  res.render('release1-user',{ objectUser :JSON.stringify(ambilJson['users'])})
})
app.get('/cities', function(req ,res) {
  res.render('release1-cities' ,{
    objectCities : JSON.stringify(ambilJson['cities'])
  } )
})
app.listen(3000)
