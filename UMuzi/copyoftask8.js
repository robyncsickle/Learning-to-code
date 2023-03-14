// Join the common letters array into a string separated by commas and spaces, with the last letter joined by 'and'
let outputString = "";
if (commonLetters.length === 0) {
  outputString = "no common letters";
} else if (commonLetters.length === 1) {
  outputString = commonLetters[0];
} else if (commonLetters.length === 2) {
  outputString = commonLetters[0] + " and " + commonLetters[1];
} else {
  outputString =
    commonLetters.slice(0, -1).join(", ") +
    ", and " +
    commonLetters[commonLetters.length - 1];
}
