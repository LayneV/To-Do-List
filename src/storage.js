export function save(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}
