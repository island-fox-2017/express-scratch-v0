var fs = require("fs");
var express = require("express")
var require = require("path")
var app = express();
let parse = JSON.parse(fs.readFileSync("data.json", "utf8"))
console.log(parse);
//===ejs
app.set("view engine", "ejs");

///=======Routing Release 0=============
///=====================================

// app.get("/", function(req, res){
//   let namaObj = {nama : "Ganang", app : "Express"}
//   res.send(`Welcome to ${namaObj.app} My App ${namaObj.nama}`);
// })
// ///=================================
// app.get("/user", function(req, res){
//   let namaObj = {nama : "Ganang", edu : "Hacktiv8"}
//   res.send(`Hai salam kenal..! \n Nama saya ${namaObj.nama}\n Saya sekolah di ${namaObj.edu}`);
// })
// ///=================================
// app.get("/cities", function(req, res){
//   let namaObj = {Alamat : "Medan"}
//   res.send(`Saya tinggal di ${namaObj.Alamat}`);
// })

///=======Routing Release 1===============

app.get('/user', function(req, res){
  res.render("user", {datauser : parse})
})
app.get('/cities', function(req, res){
  res.render("cities", {datauser : parse})
})
// app.get('/cities', function(req, res){
//   res.render("cities", {datacities : parse})
// })

app.listen(3100)
