/*
Lodash is a JavaScript library which provides utility functions for
 common programming tasks using the functional programming paradigm.
 */

 const _ = require('lodash');
 var data = [1, 1, 2, 3, 4, 5, 'kapil', 'kapil'];
 var filter = _.uniq(data);
 console.log(filter);
 
 const isString = _.isString('kapil');
 console.log(isString);