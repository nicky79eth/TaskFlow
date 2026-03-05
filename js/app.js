const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    if (taskInput.value.trim() === "") return;

    const task = taskInput.value;
    saveTask(task);
    renderTask(task);
    taskInput.value = "";
}

function renderTask(task) {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(this)">❌</button>`;
    taskList.appendChild(li);
}

function removeTask(button) {
    const li = button.parentElement;
    const task = li.firstChild.textContent.trim();
    deleteTask(task);
    li.remove();
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(renderTask);
}

function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
