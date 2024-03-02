//json is a lightweight, typeof : string

const jsonString = '{ "name": "Kapil Yadav", "age": 26, "city": "Delhi" }';
const jsonObject = JSON.parse(jsonString);
console.log("jsonObject: ",jsonObject);



module.exports = {
    jsonObject
}
