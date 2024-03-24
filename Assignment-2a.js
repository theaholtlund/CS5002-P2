// Module code: CS5002
// Module: Programming Principles and Practice
// Question 1, Running Times Scenario

// First, we define the current values for the 100M world records, to compare the user inputs to.
const mens100WorldRecord = 9.58;
const womens100WorldRecord = 10.49;

// Then, we define the current values for the 400M world records, to compare the user inputs to.
const mens400WorldRecord = 43.04;
const womens400WorldRecord = 47.6;

// Now, we need to define the conditions that will decide what message the user will see after adding their input.
// We can do this through five different if statements, defining the conditions for all scenarios.
function checkWorldRecord(distance, formattedGender, windSpeed, time) {
  if (
    formattedGender == "mens" &&
    distance === "100m" &&
    windSpeed < 2 &&
    time < mens100WorldRecord
  ) {
    alert(
      "You broke the men's world record for 100m! That's amazing, good job!"
    );
    console.log(
      "You broke the men's world record for 100m! That's amazing, good job!"
    );
    document.write(
      "You broke the men's world record for 100m! That's amazing, good job!"
    );
  } else if (
    formattedGender === "mens" &&
    distance === "400m" &&
    time < mens400WorldRecord
  ) {
    alert(
      "You broke the men's world record for 400m! That's amazing, good job!"
    );
    console.log(
      "You broke the men's world record for 400m! That's amazing, good job!"
    );
    document.write(
      "You broke the men's world record for 400m! That's amazing, good job!"
    );
  } else if (
    formattedGender === "womens" &&
    distance === "100m" &&
    windSpeed < 2 &&
    time < womens100WorldRecord
  ) {
    alert(
      "You broke the women's world record for 100m! That's amazing, good job!"
    );
    console.log(
      "You broke the women's world record for 100m! That's amazing, good job!"
    );
    document.write(
      "You broke the women's world record for 100m! That's amazing, good job!"
    );
  } else if (
    formattedGender === "womens" &&
    distance === "400m" &&
    time < womens400WorldRecord
  ) {
    alert(
      "You broke the women's world record for 400m! That's amazing, good job!"
    );
    console.log(
      "You broke the women's world record for 400m! That's amazing, good job!"
    );
    document.write(
      "You broke the women's world record for 400m! That's amazing, good job!"
    );
  } else {
    alert(
      "You did not break any world records. Sorry about that, maybe next time!"
    );
    console.log(
      "You did not break any world records. Sorry about that, maybe next time!"
    );
    document.write(
      "You did not break any world records. Sorry about that, maybe next time!"
    );
  }
}

// After we have defined the conditions that will let someone know they broke the world record,
// We need to set some limitations as to what values we will accept for the prompts distance, gender age and wind speed.
// These while loops will let the user know if their input is invalid, and continue asking for an input until they provide a valid value.
let validDistance;
while (!validDistance) {
  const distance = prompt(
    "What event are you competing in? Enter 100m or 400m."
  );
  console.log(distance);
  if (distance.toLowerCase() !== "400m" && distance.toLowerCase() !== "100m") {
    console.log(
      "This is not a valid distance! Please choose between 100m or 400m."
    );
    alert("This is not a valid distance! Please choose between 100m or 400m.");
  } else {
    validDistance = distance;
  }
}

// When asking the user to input their age, we make it all lower case and remove punctuation from their answer.
let validGender;
while (!validGender) {
  let gender = prompt(
    "Are you competing in the men's or woman's event? Enter men's or women's."
  );
  if (
    gender.replace(/\W/g, "").toLowerCase() !== "womens" &&
    gender.replace(/\W/g, "").toLowerCase() !== "mens"
  ) {
    console.log("This is not a valid input! Please enter men's or women's.");
    alert("This is not a valid input! Please enter men's or women's.");
  } else {
    validGender = gender;
    console.log(validGender);
  }
}

// Now, we make a new variable to represent the formatted answer for gender.
let formattedGender = validGender.replace(/\W/g, "").toLowerCase();

// When prompting the user for their wind speed, we make sure their answer is valid.
// This can be done by limiting their answer to numbers over 0 only.
let validWindSpeed;
if (validDistance === "100m") {
  while (!validWindSpeed) {
    const windSpeed = prompt("What was the wind speed in metres per second?");
    console.log(windSpeed);
    if (isNaN(windSpeed) || windSpeed < 0) {
      console.log(
        "This is not a valid wind speed! Please try again, entering only the number represented in seconds. Example: 1.5."
      );
      alert(
        "This is not a valid wind speed! Please try again, entering only the number represented in seconds. Example: 1.5."
      );
    } else {
      validWindSpeed = windSpeed;
    }
  }
}

// Again, when prompting the user for their running time, we make sure they enter a number greater than 0.
let validTime;
while (!validTime) {
  const time = prompt(
    "What was your time? Enter only the numbers representing seconds. Example: 10.55."
  );
  console.log(time);
  if (isNaN(time) || time < 0) {
    console.log(
      "This is not a valid time! Please try again, entering only your time in seconds."
    );
    alert(
      "This is not a valid time! Please try again, entering only your time in seconds."
    );
  } else {
    validTime = time;
  }
}

// Lastly, we call our function to see if the user has broken the world records.
// The message we want displayed has already been defined earlier in the program.
checkWorldRecord(validDistance, formattedGender, validWindSpeed, validTime);
