const mongoose = require('mongoose');

//Define the Person Schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true,
    }
})

//Create a Person Model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;