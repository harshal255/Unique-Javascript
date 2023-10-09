var ce=document.getElementById("in");
var fa=document.getElementById("ans");
var btn=document.getElementById("btn");

btn.addEventListener('click',()=>{


var output= ((9/5)*ce.value)+32;
if(isNaN(ce.value)||ce.value===""){
    output="Invalid Input";
}

fa.innerHTML=output;
})