// This Function get the tasks from the input
function get_todos() {
    // this creates an array of the tasks that are inputted 
    var todos = new Array;
    // this pulls the tasks that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    // if the input is null then JSON parse will communicate with the web browser memory
    // to make the task a javascript object
    if (todos_str != null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// this function adds the inputted task to the get_todos function array
function add() {
    // this takes the inputted task and turns it into a variable 
    var task = document.getElementById('task').value;

    if (task == "" || task == " ") {
        return false;
    }

    var todos = get_todos()
    // console.log("print todos from add function")
    // console.log(todos)
    // this adds a new task at the end of the array
    todos.push(task);
    // this converts the task into a JSON string
    localStorage.setItem('todo' , JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;


}

// this function keeps task displayed on the screen

function show() {
    // this sets the task that was received as a variable 
    var todos = get_todos();
    // this sets up each item as an unordered list 
    var html = '<ul>';
    // this displays the tasks in order in which they were inputted
    for (var i = 0; i<todos.length ; i++ ) {
        // display the tasks as a list and also display a button called X
        html += '<li>' + todos[i] + '<button class = "remove" style = "color: red;":  id = "'+ i + '">x</button><li>';
    };
    html += '</ul>'
    document.getElementById('todos').innerHTML = html;

    //this tells the browser how to display the code after an item has been removed
    var buttons = document.getElementsByClassName("remove");
    for (var i = 0 ; i <buttons.length; i++) {
        buttons[i].addEventListener('click',remove)
    }
}



function remove() {
    var id = this.getAttribute('id')
    var temp = get_todos();
    temp.splice(id,1);
    todos = temp;
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

// this displays the tasks as a list when the add item button is clicked
document.getElementById('add').addEventListener('click',add);
//this will keep the inputs displayed permanently on the screen
show();

//remove items by targeting individual element IDs
document.getElementById('add').addEventListener('click',add);


