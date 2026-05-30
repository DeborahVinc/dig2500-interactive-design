// JavaScript source code
// Variables
const capitalizationInputText = document.getElementById("capitalizationInput");
const uppercase = document.getElementById("toUppercaseButton");
const lowercase = document.getElementById("toLowercaseButton");

// Function to uppercase the text
uppercase.addEventListener("click", function () {
    // Alerts if nothing in text
    if (capitalizationInputText.value == "") {
        alert("Enter a phrase to change capitalization for.\n\nPlease try again.");
    }
    // Displays text to uppercase
    capitalizationInputText.value = capitalizationInputText.value.toUpperCase();
});

// Function to lowercase the text
lowercase.addEventListener("click", function () {
    // Alerts in nothing in text
    if (capitalizationInputText.value == "") {
        alert("Enter a phrase to change chapitalization for.\n\nPlease try again.");
    }
    // Displays text to lowercase
    capitalizationInputText.value = capitalizationInputText.value.toLowerCase();
});
