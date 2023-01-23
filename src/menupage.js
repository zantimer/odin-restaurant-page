import {elementMaker} from './helper.js';

function importAll(require) {
    let images = {};
    require.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
        return images;
    })
}


const menupage = () =>{
    //import all images
    const images = importAll(require.context('./images', false, /\.(jpe?g|svg|gif)$/));
    //main functionality
    const image = document.querySelector('.image');
    const menuArea = document.querySelector('.content-area');

    images.forEach((item)=>{
        const itemDiv = elementMaker('div', `${item}`, '', menuArea);
        const itemImg = elementMaker('img', `icon-${item}`, '', itemDiv);

        itemImg.div.src = `${item}`;
    })
}
