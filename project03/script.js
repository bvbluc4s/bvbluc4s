// Variables

const inputBox = window.document.getElementById("input-task");
const addButton = window.document.getElementById("add-button");
const theTasks = window.document.getElementById("task-list")

let toDoArray = [];

// Functions

function addNewTask() {
    toDoArray.push({
        task: inputBox.value,
        finished: false
    });

    inputBox.value = ''

    showTasks()
};

let showTasks = () => {

    let newLi = ""

    toDoArray.forEach((item, index) => {
        newLi = newLi + `
                <li class="task ${item.finished && "done"} ">
                    <img src="img/checked.png" alt="checked" onclick="finishTask(${index})">
                    <p>${item.task}</p>
                    <img src="img/trash.png" alt="trash" onclick="deleteItem(${index})">
                </li>
        
        `
    });

    theTasks.innerHTML = newLi;

    localStorage.setItem("toDoArrayList", JSON.stringify(toDoArray));
};

let deleteItem = (index) => {
    toDoArray.splice(index, 1);
    showTasks()
    console.log(`deleted: ${index}`)
}

let finishTask = (index) => {
    toDoArray[index].finished = !toDoArray[index].finished;
    showTasks(); // Atualiza a exibição das tarefas imediatamente após alterar o estado
};

let reloadPage = () => {
    const localStorageTasks = localStorage.getItem("toDoArrayList");

    toDoArray = JSON.parse(localStorageTasks)
    console.log("Deu bom!")
    showTasks()
}

reloadPage()


// Event Listeners

addButton.addEventListener("click", addNewTask);

inputBox.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        addNewTask();
    }
});


