function task2(name) {
  if (name === undefined) {
    console.log("Hello Friend!");
  } else {
    console.log("Hello " + name + "!");
  }
}
module.exports = { task2 };
