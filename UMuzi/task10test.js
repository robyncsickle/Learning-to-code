function printCommonLetters(str1, str2) {
  // convert strings to lowercase and remove special characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  str2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  // initialize an empty array to hold common letters
  var common = [];

  // loop through each letter of str1
  for (var i = 0; i < str1.length; i++) {
    var letter = str1.charAt(i);

    // check if the letter is in str2 and not already in common array
    if (str2.indexOf(letter) !== -1 && common.indexOf(letter) === -1) {
      common.push(letter);
    }
  }

  // check if there is a common number
  for (var i = 0; i < common.length; i++) {
    if (!isNaN(common[i])) {
      return "no common letters";
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
  return common.length > 0 ? output : "no common letters";
}


