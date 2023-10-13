//Input element with which you can add new tasks
const inputBox = document.getElementById('input-box')
const addBar = document.querySelector('.row')


//Button for input bar that drop 
const addBtn = document.querySelector('.fa-circle-plus')

//Elements that are responsible for the list with tasks
const taskContainer = document.querySelector('.task-container')
const task = document.querySelector('.list-element')



addBtn.addEventListener('click', () => {
    addBar.classList.toggle('show')
    addBtn.classList.toggle('fa-circle-minus')
    addBtn.classList.toggle('fa-circle-plus')
})


function addTask () {
    if (inputBox.value === '') {    
        alert('error')
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        taskContainer.appendChild(li)
        li.classList.add('list-element')
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()
}

taskContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)


function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML)
}

function showData() {
    taskContainer.innerHTML = localStorage.getItem("data")
}

showData()