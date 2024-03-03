//moongoose -> works as a bridge between node server and db server
const mongoose = require('mongoose');
require('dotenv').config();
//define the mongoDB connection URL
//const mongoURL = process.env.MONGODB_LOCAL_URL
//to store the sensitive information we use dotenv
const mongoURL = process.env.MONGODB_URL
//Set up MongoDB Connection
mongoose.connect( mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected', () => {
    console.log("Connected to MongoDB server");
})

db.on('disconnected', () => {
    console.log("Disconnected to MongoDB server");
})

db.on('error', () => {
    console.log("MongoDB Connection erro");
})


module.exports = db;