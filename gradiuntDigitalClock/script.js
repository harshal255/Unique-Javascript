// Exercise 4 - Digital Clock

setInterval(() => {
  // Elements From HTML Body
  let ss = document.getElementById("second")
  let mm = document.getElementById("minute")
  let hh = document.getElementById("hourss")
  let ampm = document.getElementById("am")

  // Date Variables
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s

  // AM or PM
  let am = h >= 12 ? "PM" : "AM";
  // Converting From 24Hr Format to 12Hr
  if (h > 12) {
    h = h - 12
  }
  h = (h < 10) ? "0" + h : h
  hh.innerHTML = h;
  mm.innerHTML = m;
  ss.innerHTML = s;
  ampm.innerHTML = am;
})