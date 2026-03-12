let tasks = [];
let currentFilter = "all";

function addTask(){

    let taskName = document.getElementById("taskName").value;
    let priority = document.getElementById("priority").value;

    if(taskName.trim() === "") return;

    let task = {
        name: taskName,
        priority: priority,
        completed:false
    };

    tasks.push(task);

    document.getElementById("taskName").value="";

    displayTasks();
}

function displayTasks(){

    let list = document.getElementById("taskList");

    list.innerHTML="";

    tasks.forEach((task,index)=>{

        if(currentFilter==="completed" && !task.completed) return;

        if(currentFilter==="pending" && task.completed) return;

        let li = document.createElement("li");

        let text = document.createElement("span");

        text.innerText = task.name + " ("+task.priority+")";
        if(task.completed)
        text.classList.add("completed");

        text.onclick = function(){

            task.completed = !task.completed;

            displayTasks();
        };

        let delBtn = document.createElement("button");

        delBtn.innerText="Delete";

        delBtn.onclick = function(){

            tasks.splice(index,1);

            displayTasks();
        };
        li.appendChild(text);

        li.appendChild(delBtn);

        list.appendChild(li);

    });
}

function filterTasks(type){

    currentFilter = type;

    displayTasks();

}