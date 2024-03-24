// Module code: CS5002
// Module: Programming Principles and Practice
// Question 2, Pangrammatic Window Scenario

// First, we define the parameters for a Pangrammatic Window.
// We are later going to check if all of the characters in the string is included at least once.
let pangrammaticWindow = "abcdefghijklmnopqrstuvwxyz";

// We now split up each character with a space, so the function we will later call can check for each letter.
pangrammaticWindow = pangrammaticWindow.split("");

// We then make sure all letters are in lower case.
// We also remove all characters through RegExp. Source for where I learned about this in the report.
let userPhrase = prompt(
  "Enter a phrase for us to check if it is a pangrammic window!"
);
console.log(userPhrase);
userPhrase = userPhrase.toLowerCase();
userPhrase = userPhrase.replace(/\W/g, "");

// Again, we log this to the console to make sure it looks how we want it to look.
console.log(userPhrase);

// Now, we make a function to check if all elements from the pangrammaticWindow value are included in the userPhrase.
function checkPangrammaticWindow(userPhrase) {
  for (let i = 0; i < pangrammaticWindow.length; i++) {
    if (!userPhrase.includes(pangrammaticWindow[i])) {
      console.log(userPhrase);

      console.log(pangrammaticWindow[i]);
      return false;
    }
  }
  return true;
}

const pangrammaticWindowResult = checkPangrammaticWindow(userPhrase);

// Finally, we define the messages we want to be displayed, depending on whether pangrammaticWindowResult is true or false.
if (pangrammaticWindowResult === true) {
  alert("This is a pangrammatic wondow! Nice one!");
  console.log("This is a pangrammatic wondow! Nice one!");
  document.write("This is a pangrammatic wondow! Nice one!");
} else {
  alert("This is not a pangrammic window...");
  console.log("This is not a pangrammic window...");
  document.write("This is not a pangrammic window...");
}
