//package.json ensure a list of packages with their version
/*package-lock.json ensure detailed of every package installed with version, 
sub dependencies, store detailed...
*/
console.log("server file is running");
//Methods to share data : get,post, patch, delete

// const userinfo = require('./basics/os_fs');
const express = require('express');
const app = express();
const db = require('./db');
const menuRouter = require('./routes/menuRoutes');
const personRouter = require('./routes/personRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();
//to access env variables, we access using process.env
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); //req.body
app.use('/menu',menuRouter);
app.use('/person',personRouter); 

//req - request
//res - response
app.get('/', function (req, res) {
    res.send("Hello Kapil");
})

//our app will be active on 3000 port
app.listen(PORT, () => {
    console.log("server is listening on port 3000");
});









//const notes = require('./basics/node.js');
// const age = notes.age;
// const result = notes.addNumber(age, 18);
// console.log(result);

// const jsonObj = require('./basics/json_to_object.js');
// console.log(jsonObj.jsonObject);

// const jsonStr = require('./basics/jsonObject_to_jsonString.js');
// console.log(jsonStr.jsonString);