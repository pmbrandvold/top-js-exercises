var fibonacci = function(number) {
  var sequence = [];
  var newNumber = 1;
  var oneBack = 0;
  var twoBack = 0;
  sequence.push(newNumber);
  for (let i = 0; i <= number; i++) {
    if (sequence[i-1] && !sequence[i-2]) {
      oneBack = sequence[i-1];
      newNumber = newNumber + oneBack;
      sequence.push(newNumber);
    } else if (sequence[i-2] && sequence[i-1]) {
      oneBack = sequence[i-1];
      twoBack = sequence[i-2];
      newNumber = oneBack + twoBack;
    } else {
      sequence.push(newNumber);
    }
  }
  return sequence[number-1];
}

module.exports = fibonacci
