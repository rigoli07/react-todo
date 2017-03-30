var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo', () => {
	    var todoText = 'test text';
	    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

	    todoApp.setState({todos: []});
	    todoApp.handleAddTodo(todoText);

	    expect(todoApp.state.todos[0].text).toBe(todoText);
	    //Expect createdAt to be a number
	    expect(todoApp.state.todos[0].createdAt).toBeA('number');
	  });

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 11,
			text: 'Test features',
			completed: false,
			createdAt: 0,
			completedAt: false
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});

		//check todos first item has completed value of false
		expect(todoApp.state.todos[0].completed).toBe(false);
		//call handleToggle with 11, so it's like it's been clicked
		todoApp.handleToggle(11);
		//Verify that value changed
		expect(todoApp.state.todos[0].completed).toBe(true);
		//expect completedAt to be a number
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	//test that when toggle from true to false, completedAt gets removed
	it('should remove completedAt value when completed changes from true to false', () => {
		var todoData = {
			id: 11,
			text: 'Test features',
			completed: true,
			createdAt: 0,
			completedAt: 1490858446
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});

		//check todos first item has completed value of false
		expect(todoApp.state.todos[0].completed).toBe(true);
		//call handleToggle with 11, so it's like it's been clicked
		todoApp.handleToggle(11);
		//Verify that value changed
		expect(todoApp.state.todos[0].completed).toBe(false);
		//expect completedAt to be a number
		expect(todoApp.state.todos[0].completedAt).toNotExist();
	});

});