import './style.css';

const mainDiv = document.querySelector('.content');

function divMaker(name){
    const div = document.createElement('div');
    div.classList.add(name);
    mainDiv.appendChild(div);
}

divMaker('header');
divMaker('logo');
divMaker('writeup');