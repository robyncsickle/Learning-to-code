function task8(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  if (hours === 1 && minutes === 1) {
    return `${hours} hour, ${minutes} minute`;
  } else if (hours !== 1 && minutes === 1) {
    return `${hours} hours, ${minutes} minute`;
  } else if (hours === 1 && minutes > 1) {
    return `${hours} hour, ${minutes} minutes`;
  } else {
    return `${hours} hours, ${minutes} minutes`;
  }
}
module.exports = { task8 };
