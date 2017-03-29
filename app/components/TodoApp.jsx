var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				}, {
					id: 2,
					text: 'Clean the yard'
				}, {
					id: 3,
					text: 'Clean the windows'
				}, {
					id: 4,
					text: 'Clean the car'
				}
			]
		};
	},
	handleAddToDo: function (text) {
		alert('new todo: ' + text);
	},
	handleAddToDo: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				{<AddTodo onAddTodo={this.handleAddToDo}/>}
			</div>
		)
	}
});

module.exports = TodoApp;