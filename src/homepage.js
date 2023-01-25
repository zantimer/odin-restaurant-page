import {elementMaker} from './helper.js';
import Logo from './images/logo.png';


const Homepage = (() =>
{
    const mainDiv = document.querySelector('.content');
    
    console.log('homepage called and check success');
    //main logo

const mainElements = ()=>
{
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
    const contentArea = elementMaker('div','content-area', "");
    return {contentArea, homeBtn, menuBtn, aboutBtn, contactBtn, sideBar}
}
}
const pageRefresh = () =>
{
    const content = document.querySelector('.content-area');
    while (content.firstChild)
    {
        console.log(content.lastChild);
        content.removeChild(content.lastChild);
    }
}
return {pageRefresh, mainElements}
})();



export {Homepage}