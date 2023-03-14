function task10(str1, str2) {
  // convert strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // initialize an empty array to hold common letters
  var common = [];

  // loop through each letter of str1
  for (var i = 0; i < str1.length; i++) {
    var letter = str1.charAt(i);

    // check if the letter is a letter (not a special character) and is in str2 and not already in common array
    if (
      /[a-z]/.test(letter) &&
      str2.indexOf(letter) !== -1 &&
      common.indexOf(letter) === -1
    ) {
      common.push(letter);
    }
  }

  // check if there is a common number
  for (var i = 0; i < common.length; i++) {
    if (!isNaN(common[i])) {
      console.log("no common letters");
    }
  }

  // join common letters with commas and spaces, with last letter joined by 'and'
  var output = common.sort().join(", ");
  var lastCommaIndex = output.lastIndexOf(",");
  if (lastCommaIndex !== -1) {
    output =
      output.substring(0, lastCommaIndex) +
      " and" +
      output.substring(lastCommaIndex + 1);
  }

  // return output, or "no common letters" if there are no common letters or a common number
  console.log(common.length > 0 ? output : "no common letters");
}

module.exports = { task10 };
