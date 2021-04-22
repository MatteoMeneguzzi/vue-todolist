var app = new Vue({
	el: "#app",
	data: {
		todos: [
			{
				text: "Guardare la lezione",
				completed: false,
			},
			{
				text: "Finire la lezione",
				completed: false,
			},
			{
				text: "Fare l'esercizio",
				completed: false,
			},
			{
				text: "Allenarsi",
				completed: false,
			},
		],
		newToDo: "",
	},
	methods: {
		addToDo() {
			// console.log("add new item");

			if (this.newToDo !== "") {
				this.todos.push({
					text: this.newToDo,
					completed: false,
				});

				// Voglio che una volta inserito il nuovo ToDo,
				// l'input torni vuoto
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
		// focusInput() {
		// 	this.$refs.todoInput.focus();
		// },
	},
	// mounted() {
	// 	this.focusInput();
	// },
});
