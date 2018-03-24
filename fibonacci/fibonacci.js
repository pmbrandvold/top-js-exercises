var fibonacci = function(number) {
  while (number < 0) {
    return 'OOPS';
  }
  var sequence = [];
  var newNumber = 1;
  sequence.push(newNumber);
  for (let i = 0; i <= Number(number); i++) {
    if (sequence.length == 1) {
      sequence.push(newNumber);
    } else if (sequence.length == 2) {
      sequence.push(newNumber + sequence[i-1])
    } else {
      sequence.push(sequence[i] + sequence[i-1])
    }
  }
  return sequence[number-1];
}

module.exports = fibonacci
