import './style.css';
import Logo from './logo.png';


const elementMaker = (type,name,text='', parent = '.content') =>{
    const div = document.createElement(`${type}`);
    const mainDiv = document.querySelector(`${parent}`);
    
    div.classList.add(name);
    div.textContent = `${text}`;
    
    mainDiv.appendChild(div);

    return {div}
}



//main logo
const logo = elementMaker('div', 'logo');
const myLogo = new Image();
myLogo.classList.add('image');

myLogo.src = Logo;
myLogo.draggable =false;

logo.div.appendChild(myLogo);

//navbar
const sideBar = elementMaker('div','sidebar');
//navbtns
const homeBtn = elementMaker('button', 'buttons', 'Home', '.sidebar');
const menuBtn = elementMaker('button', 'buttons', 'Menu', '.sidebar');
const aboutBtn = elementMaker('button', 'buttons', 'About Us', '.sidebar');
const contactBtn = elementMaker('button', 'buttons', 'Contact', '.sidebar');

//content area
const contentArea = elementMaker('div','content-area', "lorem ipsum \n lorem ipsum not");
