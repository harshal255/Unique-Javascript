
const memeImg=document.querySelector('.memeImg');
const autogenBtn=document.querySelector('.autogenBtn')
const manualBtn=document.querySelector('.manualBtn')
async function generateMemes(flag){
   
    
   if(flag){
    autogenBtn.style.border="none" 
    autogenBtn.style.background="rgb(0, 0, 255)"
    // manualBtn.style.border="2px solid red"
    clearInterval(memeInterval)
   }
    const memes= await fetch("https://api.imgflip.com/get_memes")
    const memeData= await memes.json();
    let memeNum=Math.floor(Math.random()*99);
    memeImg.src=memeData.data.memes[memeNum].url

}
let memeInterval;
function autogenMemes(){
    autogenBtn.style.border="2px solid red" 
    autogenBtn.style.background="black"
    manualBtn.style.border="none"
     memeInterval=setInterval((e)=>{
        generateMemes(false)
    },3000)
}
