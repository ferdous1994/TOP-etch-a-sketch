console.log("script loaded")
function createRandomValue(){
    const min=0;
    const max=255;
    let value=Math.floor(Math.random()*(max-min+1))+min;
    // console.log('value',value)
    return value;
}

function increaseOpacity(value){

}


// randomizeRgb()

const container=document.createElement("div")
container.classList.add('container')
const newContainer=document.createElement("div")
newContainer.classList.add('new-container')
// container.textContent='container'
const gridButton=document.createElement('button')
gridButton.classList.add('gridBtn')
// container.textContent='container'
const reloadButton=document.createElement('button')
reloadButton.classList.add('reloadbtn')
reloadButton.textContent='Reset'
reloadButton.addEventListener('click',()=>{location.reload()})
container.append(gridButton)
newContainer.append(reloadButton)
gridButton.textContent='create Grid'
gridButton.addEventListener('click',handleGridBtn)
function handleGridBtn(){
    const userValue=+prompt("enter a grid number")
    if(userValue>100){
        alert('Too large')
        return;
    }
    alert('removing current grid')
    container.replaceWith(newContainer)
    // document.append(container)
    createGrids(userValue,newContainer);
}
let opacityValue=0
function handleHover(element){
    let red=createRandomValue();
    let green=createRandomValue();
    let blue=createRandomValue();
    let computedstyle=window.getComputedStyle(element)
    let opacityValue=parseFloat(computedstyle.opacity)
    opacityValue +=0.10
    
    
    

                element.style.backgroundColor='rgb'+'('+red+','+green+','+blue +')'
                element.style.opacity=opacityValue


                 
    
}
let rowId=0;
                

function createGrids(squares,parent){
    for(let i=1 ;i <=squares;i++){
        const cols=document.createElement('div');
        cols.classList.add('cols')

        // cols.textContent='columns'
        parent.append(cols)
        for(let j=1 ;j<=squares;j++){
            rowId++;
            const rows=document.createElement('div')
            rows.classList.add('rows')
                let opvalue=0.15;

                            // rows.style.opacity="100%"

           
            
            rows.id=`row-${rowId}`
            let id=rows.id
            // attachListener('.rows')
            rows.addEventListener("mouseenter",(e)=>{
                handleHover(rows)
               
                
                
               
                
               
                // rows.style.opacity=opacity+'%'
                // console.log('opacity',opvalue)
            })
            
            
            cols.append(rows)
        }

    }
}

function attachListener(clasname){
    const element=document.querySelectorAll(clasname)
    element.forEach((div)=>{
        div.addEventListener('mouseenter',()=>{rows.classList.toggle('.rows-event')})

    })

}
createGrids(4,container)

document.body.append(container)