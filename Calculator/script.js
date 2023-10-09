const input=document.getElementById("num")
const result=document.getElementById("ans")
function handleclick(el){
    console.log(el.innerText)
    const exp=`${input.value}${el.innerText}`
    input.value=exp;
    if(["+","-","*","/"].includes(el.innerText)){
        return;
    }
    result.value=eval(exp);
}
function clearit(){
    result.value="Ans";
    input.value="";
}