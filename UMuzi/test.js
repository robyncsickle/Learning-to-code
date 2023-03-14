function printCommonLetters(str1, str2) {
  // Check if both inputs are strings
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return console.log("no common letters");
  }

  // Convert both strings to lowercase
  const lowercaseStr1 = str1.toLowerCase();
  const lowercaseStr2 = str2.toLowerCase();

  // Initialize an empty array to hold the common letters
  let commonLetters = [];

  // Loop through each letter in the first string
  for (let i = 0; i < lowercaseStr1.length; i++) {
    // Check if the current letter is in the second string and has not already been added to the commonLetters array
    if (
      lowercaseStr2.includes(lowercaseStr1[i]) &&
      !commonLetters.includes(lowercaseStr1[i])
    ) {
      // Add the current letter to the commonLetters array
      commonLetters.push(lowercaseStr1[i]);
    }
  }

  // Sort the common letters array alphabetically
  commonLetters.sort();
  commonLetters.filter((char) => /^[a-z]+$/.test(char));

  //check if there is a number
  for (let i = 0; i < commonLetters.length; i++) {
    if (!isNaN(commonLetters[i])) {
      return "no common letters";
    }

    // Check if the common letters array is empty

    if (commonLetters.length === 0) {
      console.log("no common letters");
    } else {
      // Join the common letters array into a string separated by commas and spaces, with the last letter joined by 'and'
      let outputString = "";
      if (commonLetters.length === 1) {
        outputString = commonLetters[0];
      } else if (commonLetters.length === 2) {
        outputString = commonLetters[0] + " and " + commonLetters[1];
      } else {
        outputString =
          commonLetters.slice(0, -1).join(", ") +
          ", and " +
          commonLetters[commonLetters.length - 1];
      }
      console.log(outputString);
    }
  }
}
console.log(printCommonLetters("hey!", "yo!"));
