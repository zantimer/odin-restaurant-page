import {elementMaker} from './helper.js';
import Logo from './images/logo.png';


function Homepage()
{
    const mainDiv = document.querySelector('.content');
    
    console.log('homepage called and check success');
    //main logo
if(document.querySelector('.sidebar') == null)
{
    const logo = elementMaker('div', 'logo');
    const myLogo = new Image();
    myLogo.classList.add('image');

    myLogo.src = Logo;
    myLogo.draggable =false;

    logo.div.appendChild(myLogo);
    //navbar
    const sideBar = elementMaker('div','sidebar');
    //navbtns
    const homeBtn = elementMaker('button', 'home-btn', 'Home', '.sidebar');
    const menuBtn = elementMaker('button', 'menu-btn', 'Menu', '.sidebar');
    const aboutBtn = elementMaker('button', 'about-btn', 'About Us', '.sidebar');
    const contactBtn = elementMaker('button', 'contact-btn', 'Contact', '.sidebar');
    const contentArea = elementMaker('div','content-area', "lorem ipsum \n lorem ipsum not");
    return {contentArea, homeBtn, menuBtn, aboutBtn, contactBtn, sideBar}
}
else
{
    const content = document.querySelector('.content-area');
    while (content.firstChild)
    {
        console.log(content.lastChild);
        content.removeChild(content.lastChild);
    }
}
}

export {Homepage}