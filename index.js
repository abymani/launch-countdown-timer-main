
// times units text
const dayTop = document.getElementById("day-top");
const hourTop = document.getElementById("hour-top");
const minuteTop = document.getElementById("minute-top");
const secondTop = document.getElementById("second-top");
const dayBottom = document.getElementById("day-bottom");
const hourBottom = document.getElementById("hour-bottom");
const minuteBottom = document.getElementById("minute-bottom");
const secondBottom = document.getElementById("second-bottom");


// time unit containers on which transitions will be applied
const topHalf = document.querySelectorAll(".top-half");
const bottomHalf = document.querySelectorAll(".bottom-half");
const shape = document.querySelector(".sec-shape")
let id = null;
let deg = 0;





// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  dayTop.innerHTML = days;
  hourTop.innerHTML = hours;
  minuteTop.innerHTML = minutes;
  secondTop.innerHTML = seconds;
  dayBottom.innerHTML = days;
  hourBottom.innerHTML = hours;
  minuteBottom.innerHTML = minutes;
  secondBottom.innerHTML = seconds;



  //   applying transitions

  deg=0;
  let y = setInterval(trans, 1);

function trans(){
    if (deg > 360) {
        clearInterval(y);
        // shape.style.transform =  `rotateX(0deg)`;
      } else {
        deg += 10;
        shape.style.transform =  `rotateX(${deg}deg)`;
        // topHalf.forEach(half =>{
        //     half.style.transform = `rotateX(${deg}deg)`;
        // });
      }
} 
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


