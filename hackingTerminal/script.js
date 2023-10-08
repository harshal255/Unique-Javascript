let commands_text_area = document.getElementById("commands-text-area");
let hackbtn = document.getElementById("hackbtn");
let cm1 = document.getElementById("command_1");
let cm2 = document.getElementById("command_2");
let cm3 = document.getElementById("command_3");
let cm4 = document.getElementById("command_4");
let cm5 = document.getElementById("command_5");
let cm6 = document.getElementById("command_6");
let cm7 = document.getElementById("command_7");
let cm8 = document.getElementById("command_8");
let PCNG = Math.floor(Math.random() * 125418);

async function command1() {
    setTimeout(() => {
        cm1.innerHTML = "$-> Initializing Network";
    }, 1000);
    setTimeout(() => {
        cm1.innerHTML = "$-> Initializing Network.";
    }, 1300);
    setTimeout(() => {
        cm1.innerHTML = "$-> Initializing Network..";
    }, 1500);
    setTimeout(() => {
        cm1.innerHTML = "$-> Initializing Network...";
    }, 1700);
}

async function command2() {
    setTimeout(() => {
        cm2.innerHTML = "$-> Connecting to service";
    }, 2000);
    setTimeout(() => {
        cm2.innerHTML = "$-> Connecting to service.";
    }, 2300);
    setTimeout(() => {
        cm2.innerHTML = "$-> Connecting to service..";
    }, 2500);
    setTimeout(() => {
        cm2.innerHTML = "$-> Connecting to service...";
    }, 2700);
}

async function command3() {
    setTimeout(() => {
        cm3.innerHTML = "$-> Retreiving username";
    }, 3000);
    setTimeout(() => {
        cm3.innerHTML = "$-> Retreiving username.";
    }, 3300);
    setTimeout(() => {
        cm3.innerHTML = "$-> Retreiving username..";
    }, 3500);
    setTimeout(() => {
        cm3.innerHTML = "$-> Retreiving username...";
    }, 3700);
}

async function command4() {
    setTimeout(() => {
        cm4.innerHTML = `$-> Username found`;
    }, 4000);
    setTimeout(() => {
        cm4.innerHTML = `$-> Username found.`;
    }, 4300);
    setTimeout(() => {
        cm4.innerHTML = `$-> Username found..`;
    }, 4500);
    setTimeout(() => {
        cm4.innerHTML = `$-> Username found "${commands_text_area.value}"...`;
    }, 4700);
}

async function command5() {
    setTimeout(() => {
        cm5.innerHTML = "$-> Trying a combination of 4.5 Trillion passwords";
    }, 5000);
    setTimeout(() => {
        cm5.innerHTML = "$-> Trying a combination of 4.5 Trillion passwords.";
    }, 5300);
    setTimeout(() => {
        cm5.innerHTML = "$-> Trying a combination of 4.5 Trillion passwords..";
    }, 5500);
    setTimeout(() => {
        cm5.innerHTML = "$-> Trying a combination of 4.5 Trillion passwords...";
    }, 5700);
}

async function command6() {
    setTimeout(() => {
        cm6.innerHTML = "$-> Password found";
    }, 6000);
    setTimeout(() => {
        cm6.innerHTML = "$-> Password found.";
    }, 6300);
    setTimeout(() => {
        cm6.innerHTML = "$-> Password found..";
    }, 6500);
    setTimeout(() => {
        cm6.innerHTML = `$-> Password found "${PCNG}"...`;
    }, 6700);
}

async function command7() {
    setTimeout(() => {
        cm7.innerHTML = "$-> Connecting to Facebook";
    }, 7000);
    setTimeout(() => {
        cm7.innerHTML = "$-> Connecting to Facebook.";
    }, 7300);
    setTimeout(() => {
        cm7.innerHTML = "$-> Connecting to Facebook..";
    }, 7500);
    setTimeout(() => {
        cm7.innerHTML = "$-> Connecting to Facebook...";
    }, 7700);
}

async function command8() {
    setTimeout(() => {
        cm8.innerHTML = "$-> Hacked";
    }, 8000);
}

hackbtn.addEventListener("click", async () => {
    await command1();
    await command2();
    await command3();
    await command4();
    await command5();
    await command6();
    await command7();
    await command8();
});
