var express = require('express')
var path = require('path')
var fs = require('fs')


var app = express();

var data = fs.readFileSync('data.json', 'utf8');
var obj = JSON.parse(data)
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('Welcome to Express My App Tamastro')
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
    data: id
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
    kota: city
  })
})



//release 0

// app.get('/', function (req, res) {
//   res.send('Welcome to Express My App Tamastro')
// })
//
// app.get('/users', function (req, res) {
//   var id = {
//     username: 'tamastro',
//     password: 'aselole',
//     email: 'azegazeg@joss.com'
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
