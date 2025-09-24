export class Project {
  constructor(name) {
    this.name = name;
    this.listOfToDoItems = [];
  }

  addTodo(todo) {
    this.listOfToDoItems.push(todo);
  }

  removeTodo(todoTitle) {
    this.listOfToDoItems = this.listOfToDoItems.filter(
      (todo) => todo.title !== todoTitle
    );
  }
}
