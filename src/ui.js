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
