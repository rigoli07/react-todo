var $ = require('jquery');
//function add (a, b) {
//	return a + b;
//}
//
//console.log(add(3, 1));
//
//var toAdd = [9, 5];
//console.log(add(...toAdd)) //spreads out array values as arguements

//var groupA = ['Jen', 'Cory'];
//var groupB = ['Vikram'];

//var final = [...groupB, 3, ...groupA];

//console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

//hi andrew you are 25

function greet (name, age) {
	console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
	console.log('Hi ' + name);
});

