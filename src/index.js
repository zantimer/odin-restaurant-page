import './style.css';
import {Homepage} from './homepage.js';
import {elementMaker, pageBuilder} from './helper.js';



Homepage().homeBtn.div.addEventListener('click',
 () => pageBuilder(Homepage));




