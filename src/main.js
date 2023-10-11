const inputBox = document.getElementById('input-box')
const taskContainer = document.querySelector('task-container')
const addBtn = document.querySelector('.fa-circle-plus')
const addBar = document.querySelector('.row')
const listElement = document.querySelector('.list-element')
const squareChecked = document.querySelector('.fa-square')




function addTask () {
    if(inputBox.value === '') {
        alert('error')
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        taskContainer.appendChild(li)
    }
}



addBtn.addEventListener('click', () => {
    addBar.classList.toggle('show')
    addBtn.classList.toggle('fa-circle-minus')
    addBtn.classList.toggle('fa-circle-plus')
})

listElement.addEventListener('click', () => {
    listElement.classList.toggle('checked')
})
