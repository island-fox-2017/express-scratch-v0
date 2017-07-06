'use strict'

//require express
const express = require('express');
//require path
const path = require('path');

const fs = require('fs');

//init express
let app = express();

//setup view engine
app.set('view engine', 'ejs')

//setup public folder
app.use(express.static(path.join(__dirname, 'public')))

//routing

app.get('/', function(req, res){
  res.render('index')
})

app.get('/users', function(req, res){
  // let object = {name: 'andini', alamat: 'jalan nakula', umur: '29'}
  // res.send(`${JSON.stringify(object,null,2)}`)
  let object = viewUsers();
  res.render('users', { data: object})
})


app.get('/cities', function(req, res){
  // let object = {kota: 'denpasar', provinsi: 'bali'}
  // res.send(`${JSON.stringify(object,null,2)}`)
  let object = viewCities();
  res.render('cities', {data: object})
})
app.listen(3000)





function parseData(file){
  let object = JSON.parse(fs.readFileSync(file, 'utf8'));
  return object;
}

function viewUsers(){
  let data = parseData('data.json');
  let arr = [];
  for(let i = 0 ; i < data.users.length; i++)
  {
    arr.push(data.users[i]);
  }

  return arr;
}

function viewCities(){
  let data = parseData('data.json');
  let arr = [];
  for(let i = 0 ; i < data.cities.length; i++)
  {
    arr.push(data.cities[i]);
  }

  return arr;
}

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
