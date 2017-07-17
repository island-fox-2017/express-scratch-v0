//==========================REALEASE 0=======================================//
/*
const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.send("Welcome to Express My App [Muhammad Sayyaf Rabbani]")
})

app.get('/host', function(req, res){
  res.send({
    nama:"Beben Sureben",
    asal:"Sukabumi"
  })
})

app.get('/cities', function(req, res){
  res.send({
    Provinsi:"Jawa Barat",
    Kota:"Sukabumi"
  })
})

app.listen(3005)
*/

//==========================REALEASE 1=======================================//

const express = require('express')
const app = express()
var path = require('path');

var fs = require('fs')
var ambil = fs.readFileSync('data.json', 'utf8')
var convertJson = JSON.parse(ambil)

app.use(express.static(path.join(__dirname, 'public')))
// console.log(convertJson);
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
  res.send("Welcome to Express My App [Muhammad Sayyaf Rabbani]")
})

app.get('/host', function(req, res) {
  res.render('host', {
    show_users: convertJson.users,
    show_cities: convertJson.cities

  })
})


app.get('/cities', function(req, res) {
  res.render('cities', {
    show_kota: convertJson.cities,
    show_provinsi: convertJson.cities
  })
})


// app.get('/cities', function(req, res){
//   res.send({
//     Provinsi:"Jawa Barat",
//     Kota:"Sukabumi"
//   })
// })

app.listen(3005)

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
