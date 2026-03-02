console.log('Hello, world');

let btn =document.querySelector('.btn')
let list = document.querySelector('ul')
let todo = document.querySelector('li')
let userInput = document.querySelector('.txt')
let form =document.querySelector('.input')
let cmplt = document.querySelector('#chk')
let searchInput = document.querySelector('.search');
// let edit =document.querySelector('.fa-pen-to-square')
// console.log(cmplt);

// console.log(output);

// console.log(userInput);

// console.log(dlt);

let editIndex = null;
function add(e){
    e.preventDefault();

    if(editIndex === null){
        const addition = document.createElement("li");
        addition.innerHTML = todo.innerHTML;
        addition.querySelector('#para2').innerText = userInput.value
        // addition.innerText = "todo.innerText";
        // addition.textContent = todo.textContent;
        list.appendChild(addition)
    }else{
        list.children[editIndex].querySelector('#para2').innerText = userInput.value;
         editIndex = null;
         btn.textContent = ` Add Task`;
    }

    form.reset()
    
}

form.addEventListener('submit', add)

function taskHandel(e){
     if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.parentElement.remove();
    }
    if (e.target.type === 'checkbox') {
        let taskText = e.target.parentElement.querySelector('#para2');
        
        if (e.target.checked) {
            taskText.style.textDecoration = "line-through";
            // taskText.innerText += "Task Completed"
            taskText.style.opacity = "0.5";
        } else {
            taskText.style.textDecoration = "none";
            taskText.style.opacity = "1";
        }
    }
    if(e.target.classList.contains('edit')){
        const item = list.children;
        // console.log(item);
        const target = e.target.parentElement.parentElement;
        // console.log(target);
        btn.textContent = 'Update Task'
        
        for(let i=0 ;i <item.length; i++ ){
            if(item[i] === target){
                  editIndex = i;                
            }
        }
        // userInput.value = e.target.parentElement.parentElement.textContent;
        userInput.value = target.querySelector('#para2').innerText;
    }

     }

list.addEventListener('click' , taskHandel)

function searchTask(e){
    let searchText = e.target.value.toLowerCase();
    let items = list.children;

    for(let i = 1; i < items.length; i++){
        let taskText = items[i].querySelector('#para2').innerText.toLowerCase();

        if(taskText.includes(searchText)){
            items[i].style.display = "flex";
        }else{
            items[i].style.display = "none";
        }
    }
}

searchInput.addEventListener('keyup', searchTask);
