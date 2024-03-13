var moment = require('moment');
var unique = require('uniq');

var myDate = new Date();
var myCoolDate = moment(myDate).format("ll"); 

var myList = [1, 2, 1, 1, 3, 4, 3, 2, 1];

var myUniqueList = unique(myList);


console.log(myDate);
console.log(myUniqueList);