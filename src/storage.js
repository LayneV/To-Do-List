import { Project } from "./project";

export function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadProjects() {
  const savedJSON = localStorage.getItem("projects");

  if (savedJSON === null) {
    return [];
  }

  let plainData;
  try {
    plainData = JSON.parse(savedJSON);
  } catch (e) {
    console.error("Error parsing saved data:", e);
    return [];
  }

  if (!Array.isArray(plainData)) {
    console.warn("Saved data is not an array. Starting fresh.");
    return [];
  }

  const objectProjects = [];
  plainData.forEach((p) => {
    const project = new Project(p.name);
    p.listOfToDoItems.forEach((todo) => {
      project.addTodo(todo);
    });
    objectProjects.push(project);
  });

  return objectProjects;
}
