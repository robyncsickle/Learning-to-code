function task9(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      result.push(str[i].toLowerCase());
    }
  }

  return result.sort();
}
module.exports = { task9 };
