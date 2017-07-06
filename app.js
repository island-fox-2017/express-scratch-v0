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

// untu require expressnya
var express = require('express');

//akses folder project
var path = require('path');

// cara untuk instantiate
var app = express()

const fs = require('fs');
let loadFile =fs.readFileSync('data.json', 'UTF-8')// 
let readFile = JSON.parse(loadFile);

app.set('view engine', 'ejs');

//untuk setup view engine ejs
var path_name = path.join(__dirname, 'public');
var express_static = express.static(path_name);
app.use(express_static);

//untuk routing dengan send
app.get('/', function(req, res){

  res.send('Welcome To Express My App [Hari Antara]');
});

// ini dengan object manual
app.get('/users', function(req, res){
  var namaUser = "HariAntara";
  var userEmail = "hariantara.iputu@gmail.com"
  res.render('users',
            {
              username: namaUser,
              email:userEmail
                              })
})

app.get('/cities', function(req, res){
  var city = "Denpasar"
  var state = "Bali"
  res.render("cities",
            {
              kota: city,
              provinsi: state
            })
})

app.get('/JSONUser', function(req, res){
  // var objectUser = {
  //   userName1: JSON.stringify(readFile.users[0].username),
  //   password1: JSON.stringify(readFile.users[0].password),
  //   email1: JSON.stringify(readFile.users[0].email),
  //   userName2: JSON.stringify(readFile.users[1].username),
  //   password2: JSON.stringify(readFile.users[1].password),
  //   email2: JSON.stringify(readFile.users[1].email)
  // }
  res.render('JSONUser', {readFile})
})

app.get('/JSONcity', function(req, res){
  res.render('JSONcity', {readFile})
})

app.listen(3000);
