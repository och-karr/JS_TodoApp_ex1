document.getElementById("myForm").addEventListener("submit", saveTask);

function saveTask(e) {

    //get form values
    var taskName = document.getElementById("taskName").value;
    var taskDescription = document.getElementById("taskDescription").value;

    //create an object to store the variables
    var task = {
        name: taskName,
        description: taskDescription
    }

    e.preventDefault();
    
    if (localStorage.getItem("tasks") == null) {

        localStorage.setItem("tasks", JSON.stringify(task));
    
    }
}