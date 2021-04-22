var app = new Vue({
	el: "#app",
	data: {
		todos: [
			{
				text: "guardare lezione",
				completed: false,
			},
			{
				text: "finire lezione",
				completed: false,
			},
			{
				text: "allenarsi",
				completed: false,
			},
			{
				text: "guadagnare bitcoin",
				completed: false,
			},
		],
		newToDo: " ",
	},
	methods: {
		addToDo() {
			// console.log("add new item");

			if (this.newToDo !== " ") {
				this.todos.push({
					text: this.newToDo,
					completed: false,
				});

				this.newToDo = "";
				this.$refs.todoInput.focus();
			}
		},

		removeToDo(index) {
			this.todos.splice(index, 1);
		},

		updateStatus(index) {
			this.todos[index].completed = !this.todos[index].completed;
		},
		focusInput() {
			this.$refs.todoInput.focus();
		},
	},
	mounted() {
		this.focusInput();
	},
});
