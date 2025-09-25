import { getProjects, findProject, setActiveProject } from ".";

export function renderProjects() {
  let todoList = getProjects();
  const projectListDiv = document.getElementById("project-list-container");
  projectListDiv.innerText = "";

  todoList.forEach((p) => {
    let projectCards = document.createElement("div");
    projectCards.textContent = p.name;
    projectCards.dataset.projectName = p.name;

    projectListDiv.appendChild(projectCards);

    projectCards.addEventListener("click", (e) => {
      const clickedProjectName = e.target.dataset.projectName;
      const foundProject = findProject(clickedProjectName);
      setActiveProject(foundProject);
      renderTodos(foundProject);
    });
  });
}

export function renderTodos(project) {
  const projectListDiv = document.getElementById("todo-display-area");
  projectListDiv.innerText = "";
  console.log(project);

  project.listOfToDoItems.forEach((p) => {
    let toDoList = document.createElement("div");
    toDoList.innerText = p.title;
    projectListDiv.appendChild(toDoList);
  });
}
