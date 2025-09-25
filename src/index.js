import "./styles.css";
import { createToDoItems } from "./todo";
import { Project } from "./project";
import todoImg from "./to-do-list.png";
import { renderProjects, renderTodos } from "./ui";
import { save } from "./storage";

const img = document.createElement("img");
img.src = todoImg;
document.querySelector("header").appendChild(img);

let todoList = [];
let activeProject = null;

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
  const foundProject = todoList.find((p) => p.name === projectName);

  if (foundProject) {
    return foundProject;
  } else {
    console.log("Project does not exist");
  }
}

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
renderProjects();
renderTodos(houseProjects);
createNewProject();
addTodoForm();

function createNewProject() {
  const newProjectForm = document.getElementById("new-project-form");

  newProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newProjectInput = document.getElementById("project-name-input");
    const projectName = newProjectInput.value;

    if (!projectName) {
      return;
    }

    const newProject = new Project(projectName);
    addNewProject(newProject);
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
    dialog.showModal();
  });

  cancelBtn.addEventListener("click", () => {
    dialog.close();
    newTodoForm.reset();
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
    currentProject.addTodo(newTodo);
    renderTodos(currentProject);
    newTodoForm.reset();
    dialog.close();
  });
}
