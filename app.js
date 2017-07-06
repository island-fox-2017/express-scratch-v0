var express = require('express')
var path = require('path')
var app = express();
var fs = require('fs')

var data = fs.readFileSync('data.json', 'utf8'); //change from arrays to string // karena kita butu datany dlu mkny msti nungguiin smpe slese
// in computer language 1010100
var obj = JSON.parse(data) //karena data wktu di input adalah dalam 1 string PARSE berguna untuk mengganti nya menjadi object
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('Welcome to Express My App Renata')
})

app.get('/users', function (req, res) {
  var id = {
    username1: JSON.stringify(obj.users[0].username),
    password1: JSON.stringify(obj.users[0].password),
    email1: JSON.stringify(obj.users[0].email),
    username2: JSON.stringify(obj.users[1].username),
    password2: JSON.stringify(obj.users[1].password),
    email2: JSON.stringify(obj.users[1].email)
  }

  res.render('users', {
    user: id
    // sebenerny bisa id aja tapi klo mau beberapa object ya biar inget pake bgni
    // ini object // klo this.nama itu class and this ny namany attribute
  })
})

app.get('/cities', function (req, res) {
  var city = {
    name1: JSON.stringify(obj.cities[0].name),
    provinsi1: JSON.stringify(obj.cities[0].province),
    name2: JSON.stringify(obj.cities[1].name),
    provinsi2: JSON.stringify(obj.cities[1].province)
  }
  res.render('cities', {
    kota: obj
  })
})

//release 0

// app.get('/', function (req, res) {
//   res.send('Welcome to Express My App Renata')
// })
//
// app.get('/users', function (req, res) {
//   var id = {
//     username: 'renata',
//     password: 'lolol',
//     email: 'renataclarak@gmail.com'
//   }
//   res.render('users', {
//     username: id
//   })
// })
//
// app.get('/cities', function (req, res) {
//   var city = {
//     name: 'jakarta',
//     provinsi: 'DKI Jakarta'
//   }
//   res.render('cities', {
//     cities: city
//   })
// })

app.listen(3000)
