document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    function addTask(){
        const taskText = taskInput.value.trim();
        if(taskText === ''){
            alert('alert enter a task !');
            return;
        }else{
            let newtask = document.createElement("LI");
            newtask.textContent = taskText;
            let newTaskButton = document.createElement('button');
            newTaskButton.textContent = 'Remove';
            newTaskButton.classList.add('remove-btn');
            newTaskButton.onclick = function(){
                newtask.remove();
            }
            newtask.appendChild(newTaskButton);
            taskList.appendChild(newtask);
            taskInput.value = '';      
    
        }
    }
    

    addButton.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',function(event){
        if(event.key === "Enter"){
            addTask();
        }
    })

    



});



