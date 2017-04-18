var $ = require('jquery');
var TodoSearch = require('TodoSearch');

module.exports = {
	//setTodos: function(todos) {
	//	if ($.isArray(todos)) { //takes a varible and returns true or false, depending if it's an array
	//		localStorage.setItem('todos', JSON.stringify(todos)); //JSON.stringify, takes array and converts into a string so it can be processed through local storage
	//		return todos;
	//	}
	//},
	//getTodos: function () {
	//	var stringTodos = localStorage.getItem('todos'); //set stringTodos equal to todos value from local storage
	//	var todos = [];
//
	//	try { //checks to see if what is stored in stringTodos, is a valid obkect or array
	//		todos = JSON.parse(stringTodos); //converts strings into an array 
	//	} catch (e) { //if it's not valid, we do nothing
//
	//	}

	//	return $.isArray(todos) ? todos : []; //if todos is an array, it excutes the code after the '?', if it's not an array, it excutes the code after the :, the if statement below does the exactly same thing.

		//if ($.isArray(todos)) {
		//	return todos;
		//} else {
		//	return [];
		//}
	//},
	filterTodos: function (todos, showCompleted, searchText) {
		var filteredTodos = todos;

		//filter by showCompleted 
		filteredTodos = filteredTodos.filter((todo) => { //built in array method, take an existing array and filter based on certain things
			return !todo.completed || showCompleted;
		});

		//filter by searchText
		filteredTodos = filteredTodos.filter((todo) => {
	      	var text = todo.text.toLowerCase();
	      	return searchText.length === 0 || text.indexOf(searchText) > -1;
	    });
		

		//sort todos with non-completed first
		filteredTodos.sort((a, b) => {
			if (!a.completed && b.completed) { //same thing - a.completed === false && b.completed === true
				return -1;	
			} else if (a.completed && !b.completed) { //same thing - a.completed === true && b.completed === false
				return 1;
			} else {
				return 0;
			}
			//return -1; //a should come before b
			//return 1; //b should come before a
			//return 0; //no change, a and b are equal
		}); //in build array method to sort arrays.

		return filteredTodos;
	}
};