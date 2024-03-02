//package.json ensure a list of packages with their version
/*package-lock.json ensure detailed of every package installed with version, 
sub dependencies, store detailed...
*/
console.log("server file is running");
//Methods to share data : get,post, patch, delete

const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/person')

//bodyparser is a middleware, which gives us the body of the request
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

//req - request
//res - response
app.get('/', function (req, res) {
    res.send("Hello Kapil");
})

app.post('/person', async (req, res) => {
    try {
        const data = req.body;
        //Create a new Person document using the Mongoose model
        // const newPerson = new Person();
        // newPerson.name = data.name;
        // newPerson.age = data.age;
        // newPerson.contact = data.contact;
        const newPerson = new Person(data);

        //Save the new person to the database using callback function
        // newPerson.save((error, person)=> {
        //     if(error){
        //         console.log('Error Saving Data:', error);
        //         res.status(500).json({error: "Internal Server Error"});
        //     } else {
        //         console.log('Data Saved Successfully');
        //         res.status(200).json(person);
        //     }
        // })

        //Now we try to avoid callback function in post requests, we use async and await
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log('Error Saving Data:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


app.get('/person', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log("data Fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log('Error geting Data:', err);
        res.status(500).json({ error : err});
    }
})
//our app will be active on 3000 port
app.listen(3000, () => {
    console.log("server is listening on port 3000");
});











// const notes = require('./node.js');
// const age = notes.age;
// const result = notes.addNumber(age, 18);
// console.log(result);

// const jsonObj = require('./json_to_object.js');
// console.log(jsonObj.jsonObject);

// const jsonStr = require('./jsonObject_to_jsonString.js');
// console.log(jsonStr.jsonString);