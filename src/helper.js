function elementMaker (type,name,text='', parent = '.content')
{
    const div = document.createElement(`${type}`);
    const mainDiv = document.querySelector(`${parent}`);
    
    div.classList.add(name);
    div.textContent = `${text}`;
    
    mainDiv.appendChild(div);

    return {div};
}

export {elementMaker};