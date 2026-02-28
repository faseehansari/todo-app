console.log('Hello, world');

let btn =document.querySelector('.btn')
let list = document.querySelector('ul')
let todo = document.querySelector('li')
let userInput = document.querySelector('.txt')
let form =document.querySelector('.input')
let cmplt = document.querySelector('#chk')
let edit =document.querySelector('.fa-pen-to-square')
// console.log(cmplt);

// console.log(output);

// console.log(userInput);

// console.log(dlt);


function add(e){
    e.preventDefault();

    const addition = document.createElement("li");
    addition.innerHTML = todo.innerHTML;
    addition.querySelector('#para2').innerText = userInput.value
    // addition.innerText = "todo.innerText";
    // addition.textContent = todo.textContent;
    list.appendChild(addition)

    userInput.value = "";
    
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
     }

list.addEventListener('click' , taskHandel)


