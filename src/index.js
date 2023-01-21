import './style.css';
import Logo from './logo.png';


const divMaker = (name,text='', parent = '.content') =>{
    const div = document.createElement('div');
    const mainDiv = document.querySelector(`${parent}`);
    
    div.classList.add(name);
    div.textContent = `${text}`;
    
    mainDiv.appendChild(div);

    return {div}
}



//main logo
const logo = divMaker('logo');
const myLogo = new Image();
myLogo.classList.add('image');

myLogo.src = Logo;
myLogo.draggable =false;

logo.div.appendChild(myLogo);

const sideBar = divMaker('sidebar', 'sidebar');
