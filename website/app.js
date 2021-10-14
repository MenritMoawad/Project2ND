/* Global Variables */
const apiKey = "";
const url = "api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}"
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const btn = document.querySelector("#generate");
btn.addEventListener('click',generateFn);

function generateFn() {
    console.log("here");
    const zipValue = document.querySelector("#zip").value;
    if (zipValue.length===0) {
        alert("Please enter zip code");
    }
    else{

    }
}