import './style.css';
import {Homepage} from './homepage.js';
import {elementMaker, pageBuilder} from './helper.js';


window.addEventListener('load', () => {
    const home = Homepage();

    home.homeBtn.div.addEventListener('click', ()=>{
        Homepage();
    })
});






