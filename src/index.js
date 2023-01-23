import './style.css';
import {Homepage} from './homepage.js';
import {menupage} from './menupage.js';
import {elementMaker} from './helper.js';


window.addEventListener('load', () => {
    const home = Homepage();

    home.homeBtn.div.addEventListener('click', ()=>{
        Homepage();
    })

    home.menuBtn.div.addEventListener('click', () =>{
        menupage();
    })
});






