let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let AMPM = document.getElementById("AMPM");

setInterval(() => {
    let clock = new Date();
    let hrs = clock.getHours();
    let min = clock.getMinutes();
    let sec = clock.getSeconds();

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (hrs == 0) {
        hrs = 12;
    }
    if (hrs < 12) {
        AMPM.innerHTML = "PM";
    } else {
        AMPM.innerHTML = "AM";
    }

    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
});
