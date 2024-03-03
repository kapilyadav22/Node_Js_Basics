const express = require('express');
const router = express.Router();

const Person = require('../models/person');

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data Fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log('Error getting Data:', err);
        res.status(500).json({ error: err });
    }
})

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
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

router.get('/:workType', async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType== 'manager' || workType =='waiter'){
            const data = await Person.find({work:workType});
            console.log(data);
            res.status(200).json(data);
        }
        else {
            res.status(400).json({error: "Invalid Parameters"});
        }
    }
    catch(err){
        res.status(400).json({error: "Internal Server Error"});
    }
})

router.put('/:id', async (req,res)=>{
try{
    const personId = req.params.id; //extract Id from URL
    const updatedPersonData = req.body; //take updated data in body
    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
        new : true, // Return the updated Document
        runValidators: true, //Run Mongoose Validation
    });
    if(!response){
        return res.status(404).json({error: "Person Not Found"});
    }
    console.log("data updated");
    res.status(200).json(response); 
}
catch(err){
    console.log(err);
    res.status(400).json({error: "Internal Server Error"});
}
})

router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId, {});
        if(!response){
            return res.status(404).json({error: "Person Not Found"});
        }
        console.log("data Deleted");
        res.status(200).json(response); 
    }
    catch(err){
        res.status(400).json({error: "Internal Server Error"});
    }
})
module.exports = router;