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
//taking value from the signup_form
var form0 = document.querySelector(".signup_form");
var submit0 = document.querySelector("#submit");
var email;
var password0;
var conpassword;

form0.addEventListener('submit', function(event){
  event.preventDefault(); //prevents the form from auto submitting
  email = document.getElementById("email").value;
  password0 = document.getElementById("password0").value;
  conpassword = document.getElementById("confirm_password").value;

  if(password0 != conpassword){
    alert("Passwords do not match");
    // password0.style.borderColor = "red";
    // conpassword.style.borderColor = "red";
    // password0.value = "";
    // conpassword.value = "";
  }
  console.log(email);
  console.log(password0);

});
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

// -------------------------------------------------------------------------------------------

//timer for one word text box

//                   -WORD TEXT BOX  1-
const testWord1 = document.querySelector("#text_word1");
const originalWord1 = "environment";
const wordResetButton1 = document.querySelector("#reset4");
const wordTheTimer1 = document.querySelector(".timer4");

var w_timer1 = [0, 0, 0, 0];
var w_interval1;
var w_timerRunning1 = false;

// Run a standard minute/second/hundredths timer:
function w_runTimer1() {
    let w_currentTime1 = leadingZero(w_timer1[0]) + ":" + leadingZero(w_timer1[1]) + ":" + leadingZero(w_timer1[2]);
    wordTheTimer1.innerHTML = w_currentTime1;
    w_timer1[3]++;

    w_timer1[0] = Math.floor((w_timer1[3]/100)/60);
    w_timer1[1] = Math.floor((w_timer1[3]/100) - (w_timer1[0] * 60));
    w_timer1[2] = Math.floor(w_timer1[3] - (w_timer1[1] * 100) - (w_timer1[0] * 6000));
}

// Match the text entered with the provided text on the page:
function w_spellCheck1() {
    let w_textEntered1 = testWord1.value ;
    let w_originTextMatch1 = originalWord1.substring(0,w_textEntered1.length);
    console.log(w_textEntered1);
    console.log("hello");
    if (w_textEntered1 == originalWord1) {
        clearInterval(w_interval1);
        // testWrapper.style.borderColor = "#429890";
    // } else {
    //     if (textEntered == originTextMatch) {
    //         testWrapper.style.borderColor = "#65CCf3";
    //     } else {
    //         testWrapper.style.borderColor = "#E95D0F";
    //     }
    // }
}
}

// Start the timer:
function w_start1() {
    let w_textEnterdLength1 = testWord1.value.length;
    if (w_textEnterdLength1 === 0 && !w_timerRunning1) {
        w_timerRunning1 = true;
        w_interval1 = setInterval(w_runTimer1, 10);
    }
    console.log(w_textEnterdLength1);
}

// Reset everything:
function w_reset1() {
    clearInterval(w_interval1);
    w_interval1 = null;
    w_timer1 = [0,0,0,0];
    w_timerRunning1 = false;

    testWord1.value = "";
    wordTheTimer1.innerHTML = "00:00:00";
}

// Event listeners for keyboard input and the reset
testWord1.addEventListener("keypress", w_start1, false);
testWord1.addEventListener("keyup", w_spellCheck1, false);
wordResetButton1.addEventListener("click", w_reset1, false);

//-----------------
//                   -WORD TEXT BOX  2-
const testWord2 = document.querySelector("#text_word2");
const originalWord2 = "misfortunate";
const wordResetButton2 = document.querySelector("#reset5");
const wordTheTimer2 = document.querySelector(".timer5");

var w_timer2 = [0, 0, 0, 0];
var w_interval2;
var w_timerRunning2 = false;

// Run a standard minute/second/hundredths timer:
function w_runTimer2() {
    let w_currentTime2 = leadingZero(w_timer2[0]) + ":" + leadingZero(w_timer2[1]) + ":" + leadingZero(w_timer2[2]);
    wordTheTimer2.innerHTML = w_currentTime2;
    w_timer2[3]++;

    w_timer2[0] = Math.floor((w_timer2[3]/100)/60);
    w_timer2[1] = Math.floor((w_timer2[3]/100) - (w_timer2[0] * 60));
    w_timer2[2] = Math.floor(w_timer2[3] - (w_timer2[1] * 100) - (w_timer2[0] * 6000));
}

// Match the text entered with the provided text on the page:
function w_spellCheck2() {
    let w_textEntered2 = testWord2.value ;
    let w_originTextMatch2 = originalWord2.substring(0,w_textEntered2.length);
    console.log(w_textEntered2);
    // console.log("hello");
    if (w_textEntered2 == originalWord2) {
        clearInterval(w_interval2);
        // testWrapper.style.borderColor = "#429890";
    // } else {
    //     if (textEntered == originTextMatch) {
    //         testWrapper.style.borderColor = "#65CCf3";
    //     } else {
    //         testWrapper.style.borderColor = "#E95D0F";
    //     }
    // }
}
}

// Start the timer:
function w_start2() {
    let w_textEnterdLength2 = testWord2.value.length;
    if (w_textEnterdLength2 === 0 && !w_timerRunning2) {
        w_timerRunning2 = true;
        w_interval2 = setInterval(w_runTimer2, 10);
    }
    console.log(w_textEnterdLength2);
}

// Reset everything:
function w_reset2() {
    clearInterval(w_interval2);
    w_interval2 = null;
    w_timer2 = [0,0,0,0];
    w_timerRunning2 = false;

    testWord2.value = "";
    wordTheTimer2.innerHTML = "00:00:00";
}

// Event listeners for keyboard input and the reset
testWord2.addEventListener("keypress", w_start2, false);
testWord2.addEventListener("keyup", w_spellCheck2, false);
wordResetButton2.addEventListener("click", w_reset2, false);

//!!!!!!!!!!!!!!!!!!!!!!
//-----------------
//                   -WORD TEXT BOX  3-
const testWord3 = document.querySelector("#text_word3");
const originalWord3 = "delightful";
const wordResetButton3 = document.querySelector("#reset6");
const wordTheTimer3 = document.querySelector(".timer6");

var w_timer3 = [0, 0, 0, 0];
var w_interval3;
var w_timerRunning3 = false;

// Run a standard minute/second/hundredths timer:
function w_runTimer3() {
    let w_currentTime3 = leadingZero(w_timer3[0]) + ":" + leadingZero(w_timer3[1]) + ":" + leadingZero(w_timer3[2]);
    wordTheTimer3.innerHTML = w_currentTime3;
    w_timer3[3]++;

    w_timer3[0] = Math.floor((w_timer3[3]/100)/60);
    w_timer3[1] = Math.floor((w_timer3[3]/100) - (w_timer3[0] * 60));
    w_timer3[2] = Math.floor(w_timer3[3] - (w_timer3[1] * 100) - (w_timer3[0] * 6000));
}

// Match the text entered with the provided text on the page:
function w_spellCheck3() {
    let w_textEntered3 = testWord3.value ;
    let w_originTextMatch3 = originalWord3.substring(0,w_textEntered3.length);
    console.log(w_textEntered3);
    // console.log("hello");
    if (w_textEntered3 == originalWord3) {
        clearInterval(w_interval3);
        // testWrapper.style.borderColor = "#429890";
    // } else {
    //     if (textEntered == originTextMatch) {
    //         testWrapper.style.borderColor = "#65CCf3";
    //     } else {
    //         testWrapper.style.borderColor = "#E95D0F";
    //     }
    // }
}
}

// Start the timer:
function w_start3() {
    let w_textEnterdLength3 = testWord3.value.length;
    if (w_textEnterdLength3 === 0 && !w_timerRunning3) {
        w_timerRunning3 = true;
        w_interval3 = setInterval(w_runTimer3, 10);
    }
    console.log(w_textEnterdLength3);
}

// Reset everything:
function w_reset3() {
    clearInterval(w_interval3);
    w_interval3 = null;
    w_timer3 = [0,0,0,0];
    w_timerRunning3 = false;

    testWord3.value = "";
    wordTheTimer3.innerHTML = "00:00:00";
}

// Event listeners for keyboard input and the reset
testWord3.addEventListener("keypress", w_start3, false);
testWord3.addEventListener("keyup", w_spellCheck3, false);
wordResetButton3.addEventListener("click", w_reset3, false);




//
