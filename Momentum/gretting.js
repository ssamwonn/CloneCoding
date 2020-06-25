'use strict'

const form = document.querySelector(".js_form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js_greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) { 
    localStorage.setItem(USER_LS, text);
}

   
function handleSubmit(event){
    event.preventDefault();
    const currentValue =input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {                  
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello!! ${text}`;
}


function lodeName() { 
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}




function init() {
    lodeName();
};

init();