'use strict'


const clockContainer = document.querySelector(".get_clock"),
    currentTime = document.querySelector(".clock");



function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const miutes = date.getMinutes();
    const second = date.getSeconds();
    currentTime.innerHTML = `${hours < 10 ? `0${hours}` : hours}:
        ${miutes < 10 ? `0${miutes}` : miutes}:
        ${second < 10 ? `0${second}` : second}`;
}


function init() {
    setInterval(getTime, 1000);

}


init(); 