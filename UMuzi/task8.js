function task8(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;

  //return 1 hour and 1 minite
  if (hours === 1 && minutes === 1) {
    return `${hours} hour, ${minutes} minute`;
  }
  // return hours and 1 min
  else if (hours !== 1 && minutes === 1) {
    return `${hours} hours, ${minutes} minute`;
  }
  // return 1 hour and minites
  else if (hours === 1 && minutes !== 1) {
    return `${hours} hour, ${minutes} minutes`;
  }
  // return hours and mintes
  else {
    return `${hours} hours, ${minutes} minutes`;
  }
}
console.log(task8(60));
