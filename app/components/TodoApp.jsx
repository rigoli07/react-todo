var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos() //loads todos list
		};
	},
	handleToggle: function (id) {
		var updateTodos = this.state.todos.map((todo) => { //map goes throuh all items
			if (todo.id === id) {
				todo.completed = !todo.completed; //sets it to its oppsite state true or false.
			}

			return todo;
		});

		this.setState({todos: updateTodos});
	},
	componentDidUpdate: function () {
		TodoAPI.setTodos(this.state.todos); //set todos when state is changed
	},
	handleAddTodo: function (text) {
		this.setState({
			todos: [
				...this.state.todos, 
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function () {
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
				{<AddTodo onAddTodo={this.handleAddTodo}/>}
			</div>
		)
	}
});

module.exports = TodoApp;