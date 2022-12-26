let input = document.querySelector('.task');
let addbtn = document.querySelector('.add-btn');
let tasks = document.querySelector('.task-list');

// add button effect effect

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addbtn.classList.add('active')
    }
    else{
        addbtn.classList.remove('active')
    }
})

// adding a task

addbtn.addEventListener('click', () => {
    if(input.value.trim() == 0){
        alert('Please enter a task')
    }
    else{
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `<p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`
        tasks.appendChild(newItem);
        input.value = "";
    }
})

// deleing a tasks

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})

// mark for completed task

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})