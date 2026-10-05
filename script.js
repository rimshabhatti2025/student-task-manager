const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const searchTask = document.getElementById("searchTask");

let tasks = [];

addTask.addEventListener("click", function () {
    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title === "") {
        alert("Please enter a task title.");
        return;
    }

    const task = {
        title: title,
        description: description
    };

    tasks.push(task);

    taskTitle.value = "";
    taskDescription.value = "";

    displayTasks(tasks);
});

function displayTasks(taskArray) {
    taskList.innerHTML = "";

    taskArray.forEach(function (task) {
        const taskCard = document.createElement("div");
        taskCard.className = "task-card";

        taskCard.innerHTML =
            "<h3>" + task.title + "</h3>" +
            "<p>" + task.description + "</p>";

        taskList.appendChild(taskCard);
    });
}

searchTask.addEventListener("input", function () {
    const searchText = searchTask.value.toLowerCase();

    const filteredTasks = tasks.filter(function (task) {
        return (
            task.title.toLowerCase().includes(searchText) ||
            task.description.toLowerCase().includes(searchText)
        );
    });

    displayTasks(filteredTasks);
});