function task10(str1, str2) {
  const lowercaseStr1 = str1.toLowerCase();
  const lowercaseStr2 = str2.toLowerCase();

  let commonLetters = [];
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

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < commonLetters.length; i++) {
    if (letters.includes(commonLetters[i])) {
      result.push(commonLetters[i]);
    }
  }
  console.log(commonLetters);
}

console.log(task10("hey", "he"));
