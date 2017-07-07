let fs = require('fs');
let express = require('express');
let path = require('path');

let app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', function (req, res) {
  let name = 'Patrick Benz';
  res.send(`Welcome to Express My App ${name}`);
});

app.get('/user', function(req, res) {
  let objSample = { name: "Ronald Ishak", position: "CEO of Hacktiv8" };
  res.send(`<marquee>${JSON.stringify(objSample,null,2)}</marquee>`);
});

app.get('/cities', function(req, res) {
  let objCitySample = {
    0: { city: "South Wales", population: 2000000 },
    1: { city: "New South Wales", population: 4000000 },
    2: { city: "York", population: 5000000},
    3: { city: "New York", population: 8000000}
  }
  res.send(`<marquee>${JSON.stringify(objCitySample,null,2)}</marquee>`);
});
*/

app.get('/', function(req, res) {
  let myName = "Patrick Benz I."
  res.render('index', {name: myName});
});

app.get('/user', function(req, res) {
  let fileSync = fs.readFileSync('data.json', 'utf8');
  let userObj = JSON.parse(fileSync);
  userObj = JSON.stringify(userObj.users);
  res.render('user', {user: userObj});
});

app.get('/cities', function(req, res) {
  let myName = "Patrick Benz I."
  let fileSync = fs.readFileSync('data.json', 'utf8');
  let citiesObj = JSON.parse(fileSync);
  citiesObj = JSON.stringify(citiesObj.cities);
  res.render('cities', {cities: citiesObj, myName: myName});
});

app.listen(1945);
