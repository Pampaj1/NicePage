const addBtn = document.querySelector('.fa-circle-plus')
const addBar = document.querySelector('.row')

addBtn.addEventListener('click', () => {
    addBar.classList.toggle('show')
    addBtn.classList.toggle('minus')
})

