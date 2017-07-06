var express = require('express')
var path = require('path');
var app = express()
app.set('view engine', 'ejs');

var path_name = path.join(__dirname, 'public')
var express_static = express.static(path_name)
app.use(express_static);

//------------------- data json

let fs = require('fs');
let data = JSON.parse(fs.readFileSync('./data.json','utf8'))
// console.log(data)
// console.log('....',data.users);
// console.log('aaaa',data.users[0]);
// console.log('xxxx',data.users[0].username);


// R 0 -- in HERE
//ROUTE
//
app.get('/', function(req, res){
  res.send("Welcome to Express My App Kokoh Tanamal")
})

// var user = {
//   message1: "Halo",
//   message2: "I am User"
// }
//
// app.get('/users', function(req, res){
//   res.send(user)
//   // ngirim variable
// })
//
// var cities = {
//   pesan1: "Halo",
//   pesan2: "Jakarta"
// }
//
// app.get('/cities', function(req, res){
//   res.send(cities)
  // ngirim variable
// })

//----------------------------------------------------
// R 1
// utk akses keseluruhan
app.get('/users', function(req,res){
  let data = JSON.parse(fs.readFileSync('./data.json','utf8'))
//console.log('bbb',data);
  res.render('viewrsatu',{dataJSON:JSON.stringify(data.users,null,2)})
})

app.get('/cities', function(req,res){
  let data = JSON.parse(fs.readFileSync('./data.json','utf8'))
//console.log('bbb',data);
  res.render('viewrsatu',{dataJSON:JSON.stringify(data.cities,null,2)})
})

// utk akses satu per satu !!
// app.get('/cities', function(req,res){
//   let data = JSON.parse(fs.readFileSync('./data.json','utf8'))
// console.log('bbb',data);
//   res.render('viewrsatusatu',{dataJSON:data})
// })

app.listen(3000)

//========================================================================================

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
