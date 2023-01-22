function elementMaker (type,name,text='', parent = '.content')
{
    const div = document.createElement(`${type}`);
    const mainDiv = document.querySelector(`${parent}`);
    
    div.classList.add(name);
    div.textContent = `${text}`;
    
    mainDiv.appendChild(div);

    return {div};
}
function pageBuilder(tab = function(){console.log('need to pass in the tab')})
{
    const mainDiv = document.querySelector('.content');
    if (mainDiv.childElementCount.valueOf() != 0)
    {
        console.log('pagebuilder in helper');
    mainDiv.childNodes.forEach((node)=>{
        node.remove();
    });
    tab();
    }

    else
    {
    tab();
    } 
}


export {elementMaker, pageBuilder};