const tasks = [];

function addTask() {
    const name = document.getElementById("taskName").value;
    const description = document.getElementById("taskDescription").value;
    const deadline = document.getElementById("taskDeadline").value;
    const priority = document.getElementById("taskPriority").value;
    

    const task = {
        name,
        description,
        deadline,
        priority,
        completed: false
    };

    tasks.push(task);
    updateTaskList();
    updateProgress();
    console.log("Task added:", task); 
}

function updateTaskList() {
    const tasksList = document.getElementById("tasks");
    tasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${task.name}</span>
            <span>${task.description}</span>
            <span>${task.priority}</span>
            <span>${task.deadline}</span>
            <button class="complete-button">${task.completed ? 'Completed' : 'Complete'}</button>
        `;

        const completeButton = listItem.querySelector('.complete-button');
        completeButton.addEventListener('click', () => markAsCompleted(index));
        tasksList.appendChild(listItem);
    });
    console.log("Task list updated"); 
}


function markAsCompleted(index) {
    tasks[index].completed = !tasks[index].completed;;
    updateTaskList();
    updateProgress();
    console.log("Task marked as completed:", tasks[index]); 
    const listItem = document.getElementById("tasks").children[index];
    const completeButton = listItem.querySelector('.complete-button');
    completeButton.textContent = 'Completed';

}

function updateProgress() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = (completedTasks / totalTasks) * 100;

    const progressBar = document.getElementById("progress");
    progressBar.style.width = `${progress}%`;
    console.log("Progress updated:", progress); s
}

updateTaskList();
updateProgress();
