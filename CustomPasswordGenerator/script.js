const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const lengthDisplay = document.querySelector("[data-lengthNumber");
const inputSlider = document.querySelector("[data-lengthSlider]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//set strength circle colour to grey
setIndicator("#ccc");

//set password length according to slider 
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //or bhi kuchh krna hai
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%";
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //add shadow
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`
}

function getRndInteger(min, max){
    //Math.random() --> gives number between 0 and 1
    //for round off use Math.floor
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNumber(){
    return getRndInteger(0, 9);
}

function generateLowerCase(){
    // 'a'--> 97 'z'-->123
    //get character using ASCII value generated using random function
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol(){
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    // .checked --> used to check if checkbox is ticked
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    // rules for setting colors
    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } 
    else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6){
        setIndicator("#ff0");
    } 
    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        //jab tak ye na ho tab tak aage na badho -> await
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");
    setTimeout( () => {
        copyMsg.classList.remove("active");
    }, 2000);
}


function handleCheckBoxChange(){
    //starts from first checkbox and counts how many are ticked
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        //call function for reflecting change in UI
        handleSlider();
    }
}

function shufflePassword(array){
    //fisher Yates method
    for(let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}


allCheckBox.forEach( (checkbox) => {
    //jab bhi checkbox ki value change hogi -> we will call function handleCheckBoxChange
    checkbox.addEventListener('change', handleCheckBoxChange);
})
//to change value according to slider on sliding
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => {
    //means if password input field in non empty then copy it
    if(passwordDisplay.value){
        copyContent();
    }
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected
    if(checkCount <= 0)
        return;
    
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    //let's start the journey to find new password
    console.log("starting the journey");
    //remove old password
    password = "";

    //lets put the stuff mentioned by the checkboxes
    // if(uppercaseCheck.checked){
    //     password += generateUpperCase();
    // }
    // if(lowercaseCheck.checkCount){
    //     password += generateLowerCase();
    // }
    // if(numbersCheck.checked){
    //     password += generateRandomNumber();
    // }
    // if(symbolsCheck.checked){
    //     password += generateSymbol();
    // }

    let funcArr = [];
    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);
    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);
    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);
    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);
    
    //compulsory addition first
    for(let i=0; i<funcArr.length; i++){
        password += funcArr[i]();
    }
    console.log("compulsory addition done");

    //remaining addition
    for(let i=0; i<passwordLength - funcArr.length; i++){
        let randomIndex = getRndInteger(0, funcArr.length);
        password += funcArr[randomIndex]();
    }
    console.log("remaining addition done");
    
    //shuffle the password
    password = shufflePassword(Array.from(password));
    //show in UI
    passwordDisplay.value = password;
    ///calculate strength
    calcStrength();
});