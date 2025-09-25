To-Do List Application

A feature-rich, responsive, single-page To-Do List application built with modern vanilla JavaScript. This project, part of The Odin Project curriculum, demonstrates a solid understanding of object-oriented programming, modular architecture, and browser data persistence without relying on any front-end frameworks.

Live Demo: https://laynev.github.io/To-Do-List/

Features
🗂️ Project Management

Create new projects to organize tasks.

Delete projects.

The application always has a "Default" project for new users.

✅ Todo Management

Add new todo items with a title, description, due date, and priority.

Delete todo items from any project.

A clean, modern modal/dialog is used for creating new todos.

🎨 Dynamic UI

The UI instantly updates when projects or todos are created or deleted.

The currently selected project is visually highlighted.

Todos are color-coded with a left border based on their priority (Low, Medium, High).

💾 Data Persistence

All projects and todos are saved to the browser's localStorage.

Your data is automatically reloaded when you return to the application.

📱 Responsive Design

Professional sidebar layout on desktop.

Seamlessly stacks into a single-column view on mobile and tablet devices.

Tech Stack & Core Concepts

Languages: HTML5, CSS3, JavaScript (ES6+)

Build Tool: Webpack

Key JavaScript Concepts:

Object-Oriented Programming (OOP): Classes (Project) and factory functions (createToDoItems) model the application's data.

ES6 Modules: Logical, reusable modules (ui.js, storage.js, etc.) using import/export syntax.

DOM Manipulation: All UI components dynamically rendered and updated using the DOM API.

State Management: Tracks the "active project" and keeps the UI in sync.

Data Persistence: Saves and loads data via localStorage.

Getting Started

Follow these steps to run the project locally:

# 1. Clone the repository
```bash
git clone https://github.com/laynev/To-Do-List.git
```

# 2. Navigate into the project directory
```bash
cd To-Do-List
```

# 3. Install dependencies
```bash
npm install
```

# 4. Start the development server
```bash
npm start
```


Then open your browser and visit:

http://localhost:8080

Optional Notes

Resetting Local Data: Clear your browser's localStorage to remove all projects and todos.