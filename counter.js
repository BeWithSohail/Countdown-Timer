
// let endDate = "16 March 2023 12:29 AM";
// document.getElementById("enddate").innerHTML = endDate;
// let input = document.querySelectorAll("input");

// function clock(){
// let end = new Date(endDate);
// let newDate = new Date();
// let diff = (end - newDate) / 1000;
// if(diff < 0){
//    return; 
// }
// input[0].value = (Math.floor(diff / 3600 / 24));
// input[1].value = (Math.floor(diff/3600) % 24);
// input[2].value = (Math.floor(diff/60) % 60);
// input[3].value = (Math.floor(diff % 60));
// }

// clock();

// setInterval(()=>{
// return clock();
// },1000);

// console.log(diff);
// console.log(newDate);

/*
1 days = 24 Hrs
1 Hours = 60 Mint
60 Min = 3600 Seconds
*/

let endDate = "03 December 2023 1:00 PM"; 
let DateNow = new Date();
let endDtaeHeading = document.getElementById("enddate");
endDtaeHeading.innerText = endDate;
let inputGroup = document.querySelectorAll("input");
function getDate() {
    let differenceInMillis  = new Date(endDate) - Date.now();
    if (differenceInMillis  > 0) {
        const millisecondsPerSecond = 1000;
        const millisecondsPerMinute = millisecondsPerSecond * 60;
        const millisecondsPerHour = millisecondsPerMinute * 60;
        const millisecondsPerDay = millisecondsPerHour * 24;
        let getDays = Math.floor(differenceInMillis  / millisecondsPerDay);
        inputGroup[0].value = getDays;
        const remainigHoursinMiles = differenceInMillis  % millisecondsPerDay;
        let getHours = Math.floor(remainigHoursinMiles / millisecondsPerHour);
        inputGroup[1].value = getHours;
        const remainingMinutesInMillis = remainigHoursinMiles % millisecondsPerHour;
        let getMinutes = Math.floor(remainingMinutesInMillis / millisecondsPerMinute);
        inputGroup[2].value = getMinutes;
        const seconds = Math.floor((differenceInMillis % millisecondsPerMinute) / millisecondsPerSecond);
        inputGroup[3].value = seconds;
     //   inputGroup[3].value = getSeconds;
    } else {
        console.log('The specified date has already passed.');
        clearInterval(interval); // Stop the interval if the specified date has passed
    }
}

// Call getDate() initially to calculate and display the remaining time
getDate();

// Call getDate() every second (1000 milliseconds)
const interval = setInterval(getDate, 1000);
