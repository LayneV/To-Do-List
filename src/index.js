// index.js

import "./styles.css";
import { createToDoItems } from "./todo";
import { Project } from "./project";
import { renderProjects, renderTodos } from "./ui";
import { loadProjects, saveProjects } from "./storage.js";

let activeProject = null;
let todoList = loadProjects();

if (todoList.length === 0) {
  let houseProjects = new Project("House Chores");
  addNewProject(houseProjects);
  let kitchen = createToDoItems(
    "Clean kitchen",
    "Wash the dishes",
    "Tomorrow",
    "Urgent"
  );
  houseProjects.addTodo(kitchen);
  setActiveProject(houseProjects);
  saveProjects(getProjects());
  renderProjects();
  renderTodos(houseProjects);
} else {
  setActiveProject(todoList[0]);
  renderProjects();
  renderTodos(todoList[0]);
}

export function setActiveProject(project) {
  activeProject = project;
}
export function getActiveProject() {
  return activeProject;
}

export function getProjects() {
  return todoList;
}
function addNewProject(project) {
  todoList.push(project);
}
export function findProject(projectName) {
  return todoList.find((p) => p.name === projectName);
}

export function deleteProject(projectName) {
  todoList = todoList.filter((project) => project.name !== projectName);

  if (activeProject && activeProject.name === projectName) {
    setActiveProject(todoList[0] || null);
  }
}

createNewProject();
addTodoForm();

function createNewProject() {
  const newProjectForm = document.getElementById("new-project-form");
  newProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newProjectInput = document.getElementById("project-name-input");
    const projectName = newProjectInput.value;
    if (!projectName || findProject(projectName)) {
      newProjectInput.value = "";
      return;
    }
    const newProject = new Project(projectName);
    addNewProject(newProject);
    saveProjects(getProjects());
    renderProjects();
    newProjectForm.reset();
  });
}

function addTodoForm() {
  const dialog = document.getElementById("todo-dialog");
  const openDialogBtn = document.getElementById("open-dialog");
  const cancelBtn = document.getElementById("cancelBtn");
  const newTodoForm = document.getElementById("new-todo-form");
  openDialogBtn.addEventListener("click", () => {
    if (getActiveProject()) dialog.showModal();
  });
  cancelBtn.addEventListener("click", () => {
    dialog.close();
  });
  newTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(newTodoForm);
    const name = formData.get("name");
    const description = formData.get("description");
    const dueDate = formData.get("due-date");
    const priority = formData.get("priority");
    const newTodo = createToDoItems(name, description, dueDate, priority);
    const currentProject = getActiveProject();
    if (currentProject) {
      currentProject.addTodo(newTodo);
      saveProjects(getProjects());
      renderTodos(currentProject);
    }
    newTodoForm.reset();
    dialog.close();
  });
}
