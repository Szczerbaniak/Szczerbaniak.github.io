let tasks;

function addTask() {
    const newTask = document.getElementById('taskInput').value;
    let cookies = document.cookie;
    let newCookieNum;
    let correctInput = false;
    let incorrecttInput = ["task", ":", ";"];

    document.getElementById('taskInput').value = "";

    for(i = 0; i <incorrecttInput.length; i++) {
        if(newTask.toLowerCase().includes(incorrecttInput[i])) {
            correctInput = false;
            window.alert(`Zadanie nie powinno zawierać ${incorrecttInput[i]}, może to powodować błędy`);
        }else{
            correctInput = true;
        }
    }

    if(correctInput == true) {
        if(isNaN(cookies[cookies.lastIndexOf('task') + 4] * 1)) {
            newCookieNum = 0;
        }else{
            newCookieNum = ((cookies.substr(cookies.lastIndexOf('task') + 4, (cookies.lastIndexOf('=')) - (cookies.lastIndexOf('task') + 4))) * 1) + 1;
        }
    
        document.cookie = `task${newCookieNum}=${newTask}%^&*; path=/;`;
    
        taskListMaker();
    }
}

function deleteTask(currentTask) {
    let cookies = document.cookie;

    document.cookie = `${currentTask}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    taskListMaker();
}

function taskListMaker() {
    let cookies = document.cookie;
    let taskList = "";
    console.log(cookies);

    taskMaker();

    for(i = 0; i < tasks.length; i++) {
        taskList += `<div class="taskContainer">
        <p class="task">${tasks[i].substr(tasks[i].indexOf('=') + 1)}</p> 
        <button class="button" onclick="deleteTask('task${tasks[i].substr(0, (tasks[i].indexOf('=')))}')">x</button>
        </div>`;
    }
    document.getElementById("tasks").innerHTML = taskList;
}

function taskMaker() {
    let cookies = document.cookie;

    tasks = cookies.split('%^&*');

    for(i = 0; i < tasks.length; i++) {
        tasks[i] = tasks[i].replace('task', '');
        tasks[i] = tasks[i].replace('; ', '');
    }
    tasks.pop();
}
