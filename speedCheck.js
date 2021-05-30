// timer for read the passage
var seconds = 00;
var tens = 00;
var minutes = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var appendMinutes = document.getElementById('minutes');
var buttonStart = document.getElementById('start1');
var buttonStop = document.getElementById('stop1');
var buttonReset = document.getElementById('reset1');
var interval; //to store interval of time

//function to start a timer with start button
function startTimer(){
  tens++;

  if(tens<9){
    appendTens.innerHTML = "0" + tens;
  }
  if(tens>9){
    appendTens.innerHTML = tens;
  }
  if(tens>99){
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if(seconds>9){
    appendSeconds.innerHTML = seconds;
  }
  if(seconds>59){
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
}

//event listners for start of  Event
buttonStart.onclick = function(){
  buttonStart.setAttribute('disabled', 'disabled');
  interval = setInterval(startTimer);
};
buttonStop.onclick = function () {
  clearInterval(interval);
  buttonStart.removeAttribute('disabled');
}
buttonReset.onclick = function(){
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
  appendMinutes.innerHTML = minutes;
};

// 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
//Read and type the passage1

const testWrapper = document.querySelector(".test-wrapper1");
const testArea = document.querySelector("#test-area1");
const originalText = document.querySelector(".original_text1 p").innerHTML;
const resetButton = document.querySelector("#reset2");
const theTimer = document.querySelector(".timer2");

var timer = [0,0,0,0];
var interval1;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originalText.substring(0,textEntered.length);

    if (textEntered == originalText) {
        clearInterval(interval1);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval1 = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    clearInterval(interval1);
    interval1 = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);



//Read and type the passage 2

const testWrapper1 = document.querySelector(".test-wrapper2");
const testArea1 = document.querySelector("#test-area2");
const originalText1 = document.querySelector(".original_text2 p").innerHTML;
const resetButton1 = document.querySelector("#reset3");
const theTimer1 = document.querySelector(".timer3");

var timer1 = [0,0,0,0];
var interval2;
var timerRunning1 = false;
//
// // Add leading zero to numbers 9 or below (purely for aesthetics):
// function leadingZero(time) {
//     if (time <= 9) {
//         time = "0" + time;
//     }
//     return time;
// }

// Run a standard minute/second/hundredths timer:
function runTimer1() {
    let currentTime1 = leadingZero(timer1[0]) + ":" + leadingZero(timer1[1]) + ":" + leadingZero(timer1[2]);
    theTimer1.innerHTML = currentTime1;
    timer1[3]++;

    timer1[0] = Math.floor((timer1[3]/100)/60);
    timer1[1] = Math.floor((timer1[3]/100) - (timer1[0] * 60));
    timer1[2] = Math.floor(timer1[3] - (timer1[1] * 100) - (timer1[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck1() {
    let textEntered1 = testArea1.value;
    let originTextMatch1 = originalText1.substring(0,textEntered1.length);

    if (textEntered1 == originalText1) {
        clearInterval(interval2);
        testWrapper1.style.borderColor = "#429890";
    } else {
        if (textEntered1 == originalTextMatch1) {
            testWrapper1.style.borderColor = "#65CCf3";
        } else {
            testWrapper1.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start1() {
    let textEnterdLength1 = testArea1.value.length;
    if (textEnterdLength1 === 0 && !timerRunning1) {
        timerRunning1 = true;
        interval2 = setInterval(runTimer1, 10);
    }
    console.log(textEnterdLength1);
}

// Reset everything:
function reset1() {
    clearInterval(interval2);
    interval2 = null;
    timer1 = [0,0,0,0];
    timerRunning1 = false;

    testArea1.value = "";
    theTimer1.innerHTML = "00:00:00";
    testWrapper1.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset
testArea1.addEventListener("keypress", start1, false);
testArea1.addEventListener("keyup", spellCheck1, false);
resetButton1.addEventListener("click", reset1, false);

//------------------------------------------------------------------------------------------------------------------

// //password timer
// //taking value from the signup_form
// var form0 = document.querySelector(".signup_form");
// var submit0 = document.querySelector("#submit");
// var email;
// var password0;
// var conpassword;
//
// form0.addEventListener('submit', function(event){
//   event.preventDefault(); //prevents the form from auto submitting
//   email = document.getElementById("email").value;
//   password0 = document.getElementById("password0").value;
//   conpassword = document.getElementById("confirm_password").value;
//
//   if(password0 != conpassword){
//     alert("Passwords do not match");
//     // password0.style.borderColor = "red";
//     // conpassword.style.borderColor = "red";
//     // password0.value = "";
//     // conpassword.value = "";
//   }
//   console.log(email);
//   console.log(password0);
//
// });
//
// //timer function
// //pass1 - comparing and timing the re-type password 1
//
//
// //get the value when submit is pressed and compare it with original password0
// var form1 = document.querySelector(".pass1");
// function hello(){
//   console.log("I can work!");
// }
// var resetTimer11 = document.querySelector("#reset4");
// var restFormButton = document.querySelector("#reset1");
// var pass_typed1 =  document.getElementById("pass11").value;
// var theTimer11  = document.querySelector(".timer4");
// //start the timer as soon as a key is pressed
// var timer11 = [0,0,0,0];
// var interval1;
// var timerRunning11 = false;
//
// form1.addEventListener('submit', function(event){
//   event.preventDefault();
//   //stop the timer as soon as submit is pressed
//   clearInterval(interval1);
//   // var password0 = document.getElementById("password0");
//   console.log(password0);
//   pass_typed1 = document.getElementById("pass11").value;
//     console.log(pass_typed1);
//   if(password0 != pass_typed1){
//     alert('Passwords do not match');
//     // pass_typed1.value = "";
//     // pass_typed1.style.borderColor = "red";
//   }
// });
//
// // Run a standard minute/second/hundredths timer:
// function runTimer11() {
//     let currentTime11 = leadingZero(timer11[0]) + ":" + leadingZero(timer11[1]) + ":" + leadingZero(timer11[2]);
//     theTimer11.innerHTML = currentTime11;
//     timer11[3]++;
//
//     timer11[0] = Math.floor((timer11[3]/100)/60);
//     timer11[1] = Math.floor((timer11[3]/100) - (timer11[0] * 60));
//     timer11[2] = Math.floor(timer11[3] - (timer11[1] * 100) - (timer11[0] * 6000));
// }
// // Start the timer:
// function start11() {
//     let textEnterdLength11 = pass_typed1.value.length;
//     if (textEnterdLength11 === 0 && !timerRunning11) {
//         timerRunning11 = true;
//         interval11 = setInterval(runTimer11, 10);
//     }
//     console.log(textEnterdLength11);
// }
// // Reset everything:
// function reset11() {
//     clearInterval(interval11);
//     interval11 = null;
//     timer11 = [0,0,0,0];
//     timerRunning11 = false;
//
//     pass_typed1.value = "";
//     theTimer11.innerHTML = "00:00:00";
// }
// // //starting the timer should go inside a event listners
// // pass_typed1.addEventListener('keypress', start11, false);
// resetTimer11.addEventListener('click', reset11, false);
// restFormButton.addEventListener('click', reset11, false);














//
