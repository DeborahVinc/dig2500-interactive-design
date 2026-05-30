// JavaScript source code
// Variables
const intervalInputNumber = document.getElementById("intervalInput");
const lengthInputNumber = document.getElementById("lengthInput");
const getSkipSeries = document.getElementById("getSkipSeriesButton");
const result = document.getElementById("resultText");
let intervalInputNumberRounded;
let lengthInputNumberRounded;

// Function for when clicking the button to get skip count series
getSkipSeries.addEventListener("click", function () {
    // Alerts if nothing is either have nothing in them
    if (intervalInputNumber.value == "" || lengthInputNumber.value == "") {
        alert("Skip Counting requires valid lenght and interval values.\n\nPlease try again.");
        return;
    }
    // Alerts if lenght has any negative numbers
    if (lengthInputNumber.value <= 0) {
        alert("Length must be positive.\n\nPlease try again.");
        return;
    }
    // Creates and rests the array
    const resultsArray = [];
    // Rounds the number for interval
    if (intervalInputNumber.value < 0) {
        intervalInputNumberRounded = Math.ceil(intervalInputNumber.value);
    } else { 
        intervalInputNumberRounded = Math.floor(intervalInputNumber.value);
    }
    // Rounds the number for length
    if (lengthInputNumberRounded < 0) {
        lengthInputNumberRounded = Math.ceil(lengthInputNumber.value);
    } else {
        lengthInputNumberRounded = Math.floor(lengthInputNumber.value);
    }
    // Replaces with rounded number
    lengthInputNumber.value = lengthInputNumberRounded; 
    intervalInputNumber.value = intervalInputNumberRounded; 

    // Loops through to add values to array
    for (let i = 0; i < lengthInputNumberRounded; i++) {
        resultsArray.push(intervalInputNumberRounded * (i+1));
    }
    // Displays the numbers from array to screen
    result.textContent = resultsArray.join(", ");
})
