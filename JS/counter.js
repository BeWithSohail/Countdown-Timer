
let endDate = "16 March 2023 12:29 AM";
document.getElementById("enddate").innerHTML = endDate;
let input = document.querySelectorAll("input");

function clock(){
let end = new Date(endDate);
let newDate = new Date();
let diff = (end - newDate) / 1000;
if(diff < 0){
   return; 
}
input[0].value = (Math.floor(diff / 3600 / 24));
input[1].value = (Math.floor(diff/3600) % 24);
input[2].value = (Math.floor(diff/60) % 60);
input[3].value = (Math.floor(diff % 60));
}

clock();

setInterval(()=>{
return clock();
},1000);

// console.log(diff);
// console.log(newDate);

/*
1 days = 24 Hrs
1 Hours = 60 Mint
60 Min = 3600 Seconds
*/
