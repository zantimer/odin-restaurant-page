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
    
        console.log('pagebuilder in helper');
    for(let i = 0; i<mainDiv.childElementCount; i++)
    {
        if (mainDiv.childElementCount == 0)
        {
            break;
        }
        else
        {
            mainDiv.children.item(`${i}`).remove();
        }
    }
    tab();
}


export {elementMaker, pageBuilder};