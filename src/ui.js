// ui.js

import {
  getProjects,
  findProject,
  setActiveProject,
  getActiveProject,
  deleteProject,
} from ".";
import { saveProjects } from "./storage.js";

export function renderProjects() {
  const projectListDiv = document.getElementById("project-list-container");
  projectListDiv.innerHTML = "<h3>Projects</h3>";

  const projects = getProjects();

  if (projects.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.textContent = "No projects yet!";
    emptyState.style.color = "var(--text-muted)";
    projectListDiv.appendChild(emptyState);
  }

  projects.forEach((p) => {
    const projectItemDiv = document.createElement("div");
    projectItemDiv.classList.add("project-item");
    projectItemDiv.dataset.projectName = p.name;

    if (getActiveProject() && getActiveProject().name === p.name) {
      projectItemDiv.classList.add("active");
    }

    projectItemDiv.innerHTML = `
      <span class="project-name">${p.name}</span>
      <button class="delete-project-btn">&times;</button>
    `;

    projectListDiv.appendChild(projectItemDiv);

    projectItemDiv.addEventListener("click", () => {
      setActiveProject(p);
      renderProjects();
      renderTodos(p);
    });

    const deleteButton = projectItemDiv.querySelector(".delete-project-btn");
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();

      deleteProject(p.name);

      saveProjects(getProjects());

      renderProjects();
      renderTodos(getActiveProject());
    });
  });
}

export function renderTodos(project) {
  const todoDisplayArea = document.getElementById("todo-display-area");
  todoDisplayArea.innerHTML = "";

  if (!project) {
    const placeholder = document.createElement("h3");
    placeholder.textContent = "Select a project to see its tasks.";
    placeholder.style.color = "var(--text-muted)";
    todoDisplayArea.appendChild(placeholder);
    return;
  }

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = `Tasks for: ${project.name}`;
  todoDisplayArea.appendChild(projectTitle);

  if (project.listOfToDoItems.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.textContent = "No tasks yet. Add one!";
    emptyState.style.color = "var(--text-muted)";
    todoDisplayArea.appendChild(emptyState);
  }

  project.listOfToDoItems.forEach((p) => {
    const todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todo-item");
    todoItemDiv.dataset.priority = p.priority;
    todoItemDiv.dataset.title = p.title;

    todoItemDiv.innerHTML = `
      <div class="todo-content">
        <h4>${p.title}</h4>
        <p class="todo-description">${p.description}</p>
        <div class="todo-meta">
          <span class="todo-duedate">Due: ${p.dueDate}</span>
        </div>
      </div>
      <div class="todo-actions">
          <button class="delete-todo-btn">&times;</button>
      </div>
    `;

    todoDisplayArea.appendChild(todoItemDiv);

    const deleteButton = todoItemDiv.querySelector(".delete-todo-btn");
    deleteButton.addEventListener("click", () => {
      const currentProject = getActiveProject();
      const todoTitleToDelete = todoItemDiv.dataset.title;
      currentProject.removeTodo(todoTitleToDelete);
      saveProjects(getProjects());
      renderTodos(currentProject);
    });
  });
}
