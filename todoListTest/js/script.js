app.controller('todoCtrl', function () {
	let vm = this;

	//	loginName Array
	vm.loginName = [];

	//	todo List Array
	vm.todos = [];

	vm.newTodo = null;

	//button adding todo
	vm.btnAdd = function (index) {
		if (vm.newTodo.length != 0) {
			vm.todos.push({
				todo: vm.newTodo
			})
			vm.newTodo = '';
		} else {
			alert('Add new todo!!!')
		}
	}
	//button remove todo by index
	vm.btnRemove = function (index) {
		vm.todos.splice(index, 1);
	}
	//edit todo button
	vm.btnEdit = function (edit) {
		vm.editTodoText = edit.todo;
		vm.saveTodo = function () {
			edit.todo = vm.editTodoText;
			vm.editTodoText = '';
		}
	}
	vm.login = null;

	//login name button
	vm.submit = function () {
		if (vm.login.length != 0) {
			vm.loginName.push({
				name: vm.login
			})
			$('#loginModal').modal('hide');
			vm.login = '';
		} else {
			$('#loginModal').modal('show');
			alert('Enter your name!!!');
		}
	}

	let myVar = setInterval(myTimer, 1000);

	//	current time fucntion
	function myTimer() {
		let d = new Date();
		document.getElementById("h1").innerHTML = d.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	//current date today
	vm.today = new Date();
	let dd = String(vm.today.getDate()).padStart(2, '0');
	let mm = String(vm.today.getMonth() + 1).padStart(2, '0');
	let yyyy = vm.today.getFullYear();
	vm.today = mm + '-' + dd + '-' + yyyy;

	$(function () {
		$('#loginModal').modal('show');
		$('.xIcon').click(function () {
			$('#table').fadeOut(600);
			$('#btnAdd').fadeOut(600);
			$('.triangle').fadeOut(600);
		});
		$('.todoOpen').click(function () {
			$('#table').fadeIn(600);
			$('#btnAdd').fadeIn(600);
			$('.triangle').fadeIn(600);
		});
	})
	
	//	changing status of todo item
	vm.changeStatus = function (done) {
		return done ? 'Done' : 'In Progress';
	}
})
