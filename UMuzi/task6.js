function task6() {
  let ans = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > ans) {
      ans = arguments[i];
    }
  }
  return ans;
}
module.exports = { task6 };
