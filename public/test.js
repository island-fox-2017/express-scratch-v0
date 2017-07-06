let fs = require("fs");

let data2 = fs.readFileSync('data.json', 'utf-8').trim();
// let data = fs.readFileSync(this._file, 'utf-8').trim();

let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

console.log('readFileSync');
console.log(data);

console.log('JSON.parse');
console.log(data2);

// console.log(data.length);
// console.log(data2.users.length);

for (var i = 0; i <= data.users.length - 1; i++) {
console.log(data.users[i].username);
console.log(data.users[i].password);
console.log(data.users[i].email);
}




// <%= for (var i = 0; i <= data.users.length - 1; i++) { %>
//   <tr>
//     <td> <%= data.users[i].username %> </td>
//     <td> <%= data.users[i].password %> </td>
//     <td> <%= data.users[i].email %> </td>
//   </tr>
// <%= } %>
