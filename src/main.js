//Input element with which you can add new tasks
const inputBox = document.getElementById('input-box')
const addBar = document.querySelector('.row')

//Button for input bar that drop 
const addBtn = document.querySelector('.fa-circle-plus')

//Elements that are responsible for the list with tasks
const taskContainer = document.querySelector('task-container')
const task = document.querySelector('list-element')

/*
function addTask () {
    if (inputBox.value === '') {
        alert('error')
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
    }
}

task.addEventListener('click', () => {
    task.classList.toggle('checked')
})


addBtn.addEventListener('click', () => {
    addBar.classList.toggle('show')
    addBtn.classList.toggle('fa-circle-minus')
    addBtn.classList.toggle('fa-circle-plus')
})
*/

function addTask () {
    if (inputBox.value === '') {
        alert('error')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        taskContainer.appendChild(li)
    }
    inputBox.value = ""
}