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

function findProject(project) {
  const foundProject = todoList.find((p) => p.name === project.name);

  if (foundProject) {
    console.log(foundProject);
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
