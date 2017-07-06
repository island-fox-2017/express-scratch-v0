const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  // res.send('Welcome to Express My App: Adith');
  res.render('home');
});

app.get('/users', function(req, res) {
  let obj = objUsers();
  res.render('users', {data : obj});
  // res.send(userObj);
});

app.get('/cities', function(req, res) {
  let obj = objCities();
  res.render('cities', {data : obj});
});

app.listen(3000);

/*---======PARSING CODE======---*/

let parsingData = (file) => {
  let objParsed = JSON.parse(fs.readFileSync(file, 'utf-8'));
  return objParsed;
};

let objUsers = () => {
  let object = parsingData('data.json');
  let arrObjUsers = [];
  for (let i = 0; i < object.users.length; i++) {
    arrObjUsers.push(object.users[i]);
  }
  return arrObjUsers;
};

let objCities = () => {
  let object = parsingData('data.json');
  let arrObjCities = [];
  for (let i = 0; i < object.cities.length; i++) {
    arrObjCities.push(object.cities[i]);
  }
  return arrObjCities;
};
/*---======0000000000000======---*/



//RELEASE 0
// app.get('/', function(req, res) {
//   res.send('Welcome to Express My App: Adith');
// });
// 
// app.get('/users', function(req, res) {
//   var userObj = {
//     nama : 'Adith',
//     warna_kulit : 'cokelat',
//     warna_rambut : 'hitam',
//     warna_mata : 'hitam'
//   };
//   res.send(`${userObj.nama} memiliki warna kulit ${userObj.warna_kulit}, warna rambut ${userObj.warna_rambut}, dan warna mata ${userObj.warna_mata}.`);
//   // res.send(userObj);
// });
// 
// app.get('/cities', function(req, res) {
//   var cityObj = {
//     nama_kota : 'Salatiga',
//     provinsi : 'Jawa Tengah',
//     negara : 'Indonesia'
//   }
//   res.send(`Adith lahir di kota ${cityObj.nama_kota}, provinsi ${cityObj.provinsi}, ${cityObj.negara}.`);
// });
// 
// app.listen(3000);