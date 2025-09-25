import { getProjects } from ".";

export function renderProjects() {
    let todoList = getProjects();
    const projectListDiv = document.getElementById('project-list-container');
    projectListDiv.innerText = "";
  
  todoList.forEach((p) => {
      let projectCards = document.createElement("div");
      projectCards.textContent = (p.name);
      projectListDiv.appendChild(projectCards);
  });
}

export function renderTodos() {
    const projectListDiv = document.getElementById("todo-display-area");
    projectListDiv.innerText = "";
    console.log(project);

    project.listOfToDoItems.forEach((p) => {
      let toDoList = document.createElement("div");
      toDoList.innerText = p.title;
      projectListDiv.appendChild(toDoList);
    });
}
