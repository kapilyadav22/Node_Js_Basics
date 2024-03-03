//fs is for working with file
//require is used to import particular file
var fs = require('fs');

//os is for working with os
var os = require('os');

var user = os.userInfo();
console.log(user);

//(filepath,data,callbackfunction)
fs.appendFile('greeting.txt', `Hi ${user.username}! \n`,
    () => console.log('file is created'));
