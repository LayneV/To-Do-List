import "./styles.css";
import { createToDoItems } from "./todo";
import { Project } from "./project";
import todoImg from "./to-do-list.png";
import { renderProjects, renderTodos } from "./ui";

const img = document.createElement("img");
img.src = todoImg;
document.querySelector("header").appendChild(img);

let todoList = [];

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
renderProjects();
renderTodos(houseProjects);

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
