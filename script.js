// Age In Days..

function ageInDays(){

var year = prompt("Enter year of birth ");
var age = (2022 - year) * 365;
document.getElementById("age").innerHTML = 'You are ' + age + ' days old 🧑🏻';
}

// Reset Function 

function reset(){
    document.getElementById('age').remove();
}