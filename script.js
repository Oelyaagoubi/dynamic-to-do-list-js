document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    let tasks = [];
    
    function loadTasks(){
        const storedTasks = localStorage.getItem('tasks') ;
        if (storedTasks){
            tasks = JSON.parse(storedTasks);
            tasks.forEach(task => {
                showTaskOnDom(task);
            });
        }
    }
    function SaveTasks() {
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    function showTaskOnDom(task){
        let newtask = document.createElement("LI");
        newtask.textContent = task;
        let newTaskButton = document.createElement('button');
        newTaskButton.textContent = 'Remove';
        newTaskButton.classList.add('remove-btn');
        newTaskButton.onclick = () =>{
            removetask(task , newtask);
        }
        newtask.appendChild(newTaskButton);
        taskList.appendChild(newtask);
    }

    function addTask(){
        const taskText = taskInput.value.trim();
        if(taskText === ''){
            alert('alert enter a task !');
            return;
        }else{
            tasks.push(taskText);
            showTaskOnDom(taskText);
            SaveTasks();
           
            taskInput.value = '';
            
            
        
         }
        
    }
    function removetask(task ,listItems){
       
         tasks = tasks.filter(t => t !== task);
         listItems.remove();
         SaveTasks();
        
    }




 
console.log(JSON.parse(localStorage.getItem('tasks')));

  
    

    addButton.addEventListener('click',function(){
        addTask();
        
    });

    taskInput.addEventListener('keypress',function(event){
        if(event.key === "Enter"){
            addTask();
           
        }
    });
    loadTasks();
// localStorage.clear();
    
    


});




