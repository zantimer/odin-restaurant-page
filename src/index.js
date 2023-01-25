import './style.css';
import {Homepage} from './homepage.js';
import {menupage} from './menupage.js';
import {elementMaker} from './helper.js';


window.addEventListener('load', () => {
    const home = (() => Homepage.mainElements())();
    const refresh = () => Homepage.pageRefresh();

    home.homeBtn.div.addEventListener('click', ()=>{
        refresh();
    })

    home.menuBtn.div.addEventListener('click', () =>{
        menupage.menuMaker();
    })
});






