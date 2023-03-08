function task4(side1, side2, side3) {
  var s = (side1 + side2 + side3) / 2;
  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  return (area = Math.floor(area));
}

module.exports = { task4 };
