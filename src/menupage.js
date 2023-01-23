import {elementMaker} from './helper.js';
import menu1 from './images/menu1.jpg';
import wings from './images/wings.JPG';
import fruitcups from './images/fruitcups.JPG';
import platter from './images/platter.JPG';
import tree from './images/tree.JPG';

let i = 0;

const menupage = () =>{
    
    const image = document.querySelector('.image');
    const menuArea = document.querySelector('.content-area');

    const imageArray = [menu1, wings, fruitcups, platter, tree];
    
    imageArray.forEach((item) =>{
        const itemDiv = elementMaker('div', `menu${i}`, '', '.content-area')
        const itemIcon = elementMaker('img', `image`, '', `.menu${i}`);
        i++;

        itemDiv.div.classList.add('menu-group');

        itemIcon.div.src = item;
    });
    i = 0;
}

export {menupage}
