//ini adalah cara require express nya
var express = require('express')

//biar bisa akses folder project
var path = require('path');

//ini cara intiate-nya
var app = express()

//ini untuk setup view engine
app.set('view engine', 'ejs');

//panggil fs
var fs = require('fs');
//panggil file
let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

//ini untuk setup public folder
var path_name = path.join(__dirname, 'public')
var express_static = express.static(path_name)
app.use(express_static);

app.get('/', function(req, res){
  res.send('<br><center><h1>Welcome to My Express App</h1><h3>by Achim Baggins</h3><br><a href="/users">Show all Users</a> &nbsp; <a href="/cities">Show all Cities</a></center>')
  // res.send('Achim Baggins')
})



//ini routing
app.get('/users', function(req, res){

  res.render('users',{users_list: data})
})

app.get('/cities', function(req, res){
  res.render('cities',{cities_list: data})
})

app.listen(3000)
