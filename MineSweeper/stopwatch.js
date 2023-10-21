let startTime;
let stopwatchInterval;
const $StopWatch = document.getElementById("stopwatch");

const restartStopwatch = () => {
  if (!stopwatchInterval) {
    $StopWatch.innerHTML = "00:00:00";
    startTime = new Date().getTime();
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
};

const stopStopwatch = () => {
  clearInterval(stopwatchInterval);
  elapsedPausedTime = new Date().getTime() - startTime;
  stopwatchInterval = null;
};

const updateStopwatch = () => {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;
  let seconds = Math.floor(elapsedTime / 1000) % 60;
  let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
  let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
  let displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  $StopWatch.innerHTML = displayTime;
};

const pad = (number) => (number < 10 ? "0" : "") + number;
