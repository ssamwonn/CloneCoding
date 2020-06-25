'use strict'

const toDoForm = document.querySelector('.js_toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js_toDoList');

const TOODS_LS = 'toDos';


let toDos = [];

function saveToDos() {
    localStorage.setItem(TOODS_LS, JSON.stringify(toDos));  // locastorage에 객체를 텍스트로 바꿔주기
}

function deleteToDo(event){ 
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id  !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}


function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = '✖️';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId         // localstorage 에 저장을 해야하기때문에 id 값을 부여           
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}



function loadToDos() {
    const loadedToDos = localStorage.getItem(TOODS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}



function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();