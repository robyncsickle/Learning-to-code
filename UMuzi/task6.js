function task6() {
  let ans = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > ans) {
      ans = arguments[i];
    }
  }
  return ans;
}
module.exports = { task6 };
