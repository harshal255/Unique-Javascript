let lists=document.querySelectorAll('.list')
let rightBox=document.querySelector('.right_div')
let leftBox=document.querySelector('.left_div');

for(list of lists){
     
    list.addEventListener("dragstart",(e)=>{
        let selected=e.target;

        rightBox.addEventListener("dragover",(e)=>{
            e.preventDefault();

        })
        rightBox.addEventListener("drop",(e)=>{
            rightBox.appendChild(selected);
            selected=null;
        })

        leftBox.addEventListener("dragover",(e)=>{
           e.preventDefault();
        })
        leftBox.addEventListener("drop",(e)=>{
            leftBox.appendChild(selected);
            selected=null
        })

    })

}


// function adder(){
//     let inpVal=document.querySelector('.inp').value;
//     let createDiv=document.createElement('p')
//     createDiv.classList.add('list')
//     createDiv.innerHTML=inpVal;
//     createDiv.draggable=true;
//     leftBox.appendChild(createDiv)
// }