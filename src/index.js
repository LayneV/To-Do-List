import "./styles.css";
import { createToDoItems } from "./todo";
import { Project } from "./project";

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
console.log(todoList[0]);
