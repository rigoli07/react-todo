var moment = require('moment');

console.log(moment().format());

//January 1st 1970 @ 12:00am -> 0
//January 1st 1970 @ 12:01am -> 60
//December 31st 1969 @ 11:59pm -> -60

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1490853793;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format("dddd, MMMM Do YYYY, HH:mm:ss"));
console.log('current moment', currentMoment.format("MMM"));
console.log('current moment', currentMoment.format("D"));

// March 30th, 2017 @ 12:13 AM
console.log('current moment', currentMoment.format("MMMM Do, YYYY @ h:mm A"));