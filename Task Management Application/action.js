var todotask = [];
var taskcompleted = [];

function addToDoTask(){
    todotask.push(document.getElementById('task').value);
    console.log(todotask);
    toDoDisplay();
}

function toDoDisplay() {
    var html = '';
    for (var i = 0; i < todotask.length; i++) {
        html += '<li> <input type="checkbox" onclick="addTaskCompleted('+i+')" id="completed'+i+'" > '+todotask[i]+
                ' <input type="text" id="edittodo'+i+'" readonly> '+
                '<button type="submit" onclick="editToDoTask('+i+')" id="edit'+i+'" class="edit">EDIT</button> '+
                '<button type="submit" onclick="updateToDoTask('+i+')" id="update'+i+'" class="update">UPDATE</button> '+
                '<button type="submit" onclick="deleteToDoTask('+i+')" class="delete">DELETE</button> </li>';
    }
    document.getElementById('todo').innerHTML = html;
    document.getElementById('task').value = "";
}

function editToDoTask(i){
    document.getElementById('edittodo'+i).value = todotask[i];
    document.getElementById('edit'+i).style.display = "none";
    document.getElementById('update'+i).style.display = "inline";
    document.getElementById('edittodo'+i).readOnly = false;
}

function updateToDoTask(i){
    todotask[i] = document.getElementById('edittodo'+i).value;
    document.getElementById('update'+i).style.display = "none";
    document.getElementById('edit'+i).style.display = "inline";
    toDoDisplay();
}

function deleteToDoTask(i){
    todotask.splice(i, 1);
    toDoDisplay();
}

function addTaskCompleted(i) {
    taskcompleted.push(todotask[i]);
    deleteToDoTask(i);
    console.log(todotask);
    console.log(taskcompleted);       
    taskCompletedDisplay();
}

function addToDo(i) {
    todotask.push(taskcompleted[i]);
    deleteTaskCompleted(i);   
    toDoDisplay();
}

function taskCompletedDisplay() {
    var html = '';
    for (var i = 0; i < taskcompleted.length; i++) {
        html += '<li> <input type="checkbox" onclick="addToDo('+i+')" id="completed'+i+'" checked> '+taskcompleted[i]+
                ' <input type="text" id="editcompleted'+i+'" readonly> '+
                '<button type="submit" onclick="editTaskCompleted('+i+')" id="edittask'+i+'" class="edit">EDIT</button> '+
                '<button type="submit" onclick="updateTaskCompleted('+i+')" id="updatetask'+i+'" class="update">UPDATE</button> '+
                '<button type="submit" onclick="deleteTaskCompleted('+i+')" class="delete">DELETE</button> </li>';
    }
    document.getElementById('completed').innerHTML = html;
    document.getElementById('task').value = "";
}

function editTaskCompleted(i){
    document.getElementById('editcompleted'+i).value = taskcompleted[i];
    document.getElementById('edittask'+i).style.display = "none";
    document.getElementById('updatetask'+i).style.display = "inline";
    document.getElementById('editcompleted'+i).readOnly = false;
}

function updateTaskCompleted(i){
    taskcompleted[i] = document.getElementById('editcompleted'+i).value;
    document.getElementById('updatetask'+i).style.display = "none";
    document.getElementById('edittask'+i).style.display = "inline";
    taskCompletedDisplay();
}

function deleteTaskCompleted(i){
    taskcompleted.splice(i, 1);
    taskCompletedDisplay();
}