'use strict'

const express = require('express')
const app = express()
const fs = require ('fs')
var path = require('path');



app.set('view engine', 'ejs');

var path_name = path.join(__dirname, 'public')
var express_static = express.static(path_name)
app.use(express_static);


// app.get('/',function (req,res){
//   res.send("Welcome to Express My App [aridwia]");
// })
//
// app.get('/users',function (req,res){
//
// res.send('{users: ari,city: bandung},{users2: dwi,city: jakarta}')
//   res.render('/users')
// })
//
// app.get('/cities',function (req,res){
//   res.send('{cities : bandung},{cities : jakarta}')
//   res.render('/cities');
// })
//
//
// app.listen(3010)

////// batas release 0

app.get('/',function(req,res){
  res.render('main')
})

app.get('/users', function(req, res){
  let data = fs.readFileSync('data.json','utf8')
  let obj =  JSON.parse(data)

  res.render('users',{message1 : obj})
})

app.get('/cities', function(req, res){
  let data = fs.readFileSync('data.json','utf8')
  let obj =  JSON.parse(data)

  res.render('cities',{message2 : obj})
})


app.listen(3010)





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
