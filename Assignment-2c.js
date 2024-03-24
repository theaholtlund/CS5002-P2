// Module code: CS5002
// Module: Programming Principles and Practice
// Question 3, Simple Lottery Scenario

// First, we ask our users for their numbers.
// This has to be done outside the loop, so that we can access the values later for our arrays.
// We also check if they are valid numbers, within the given range of numbers.
let userNumber1;

let validUserNumber1;
while (!validUserNumber1) {
  let userNumber1 = prompt(
    "Please input your first lottery number, between 1 and 59"
  );
  if (isNaN(userNumber1) || userNumber1 < 1 || userNumber1 > 59) {
    alert("This is not a valid number! Please enter a number between 1 and 59");
    console.log(
      "This is not a valid number! Please enter a number between 1 and 59"
    );
  } else {
    validUserNumber1 = parseInt(userNumber1);
    console.log(userNumber1);
  }
}

let userNumber2;

let validUserNumber2;
while (!validUserNumber2) {
  const userNumber2 = prompt(
    "Please input your second lottery number, between 1 and 59"
  );
  if (isNaN(userNumber2) || userNumber2 < 1 || userNumber2 > 59) {
    alert("This is not a valid number! Please enter a number between 1 and 59");
    console.log(
      "This is not a valid number! Please enter a number between 1 and 59"
    );
  } else {
    validUserNumber2 = parseInt(userNumber2);
    console.log(userNumber2);
  }
}

let userNumber3;

let validUserNumber3;
while (!validUserNumber3) {
  const userNumber3 = prompt(
    "Please enter your third lottery number, between 1 and 59"
  );
  if (isNaN(userNumber3) || userNumber3 < 1 || userNumber3 > 59) {
    alert("This is not a valid number! Please enter a number between 1 and 59");
    console.log(
      "This is not a valid number! Please enter a number between 1 and 59"
    );
  } else {
    validUserNumber3 = parseInt(userNumber3);
    console.log(userNumber3);
  }
}

// Then, we need to generate three random numbers of our own.
const lotteryNumber1 = Math.round(Math.random() * 59) + 1;
console.log(lotteryNumber1);

const lotteryNumber2 = Math.round(Math.random() * 59) + 1;
console.log(lotteryNumber2);

const lotteryNumber3 = Math.round(Math.random() * 59) + 1;
console.log(lotteryNumber3);

// Next, we make an array based on the numbers our lottery participant has entered.
// This will make it easier to check if any of them are winning numbers.
let userNumbersArray = [validUserNumber1, validUserNumber2, validUserNumber3];
console.log(userNumbersArray);

// The next step is to make an array based on the randomly generated numbers.
// This is needed so that we can loop our user numbers through the lottery numbers.
let lotteryNumbersArray = [lotteryNumber1, lotteryNumber2, lotteryNumber3];
console.log(lotteryNumbersArray);

// We can now create a for loop that will help us decide what message the user receives.
// The loop is needed to match the randomly generated numbers with the chosen user numbers.
// We start off by creating an empty array, that we add potential matches in the two arrays to the count of matches.
function checkForMatches(userNumbersArray, lotteryNumbersArray) {
  let matchingNumbersArray = 0;
  for (let i = 0; i < userNumbersArray.length; i++) {
    if (lotteryNumbersArray.includes(userNumbersArray[i])) {
      matchingNumbersArray++;
    }
  }
  if (matchingNumbersArray === 1) {
    alert("You win the third prize!");
    console.log("You win the third prize!");
    document.write("You win the third prize!");
  } else if (matchingNumbersArray === 2) {
    alert("You win the second prize!");
    console.log("You win the second prize!");
    document.write("You win the second prize!");
  } else if (matchingNumbersArray === 3) {
    alert("Congratulations, you win the first prize!");
    console.log("Congratulations, you win the first prize!");
    document.write("Congratulations, you win the first prize!");
  } else if (matchingNumbersArray === 0) {
    alert("Sorry, you didn’t win this time!");
    console.log("Sorry, you didn’t win this time!");
    document.write("Sorry, you didn’t win this time!");
    return matchingNumbersArray;
  }
}

console.log(checkForMatches(userNumbersArray, lotteryNumbersArray));

// Now, we check if matches are in correct order as well as containing correct numbers
const stringUserNumbers = userNumbersArray.join(" ");
const stringLotteryNumbers = lotteryNumbersArray.join(" ");

// Finally, we create an if statement to let the user know if all numbers match, in the correct order.
if (stringUserNumbers === stringLotteryNumbers) {
  alert("You win the jackpot!");
  console.log("You win the jackpot!");
  document.write("You win the jackpot!");
}
