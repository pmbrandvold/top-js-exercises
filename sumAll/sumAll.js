var sumAll = function(firstNumber, secondNumber) {
  let answer = 0;
  //error checking
  while (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number') {
    return "ERROR";
  }
  while (firstNumber <= 0 || secondNumber <= 0) {
    return "ERROR";
  }

  // do the math
  if (firstNumber < secondNumber) {
    let counter = secondNumber - firstNumber;
    for (let i = 0; i <= counter; i++) {
      answer += (firstNumber + i);
    }
  } else if (secondNumber < firstNumber) {
    let counter = firstNumber - secondNumber;
    for (let i = 0; i <= counter; i++) {
      answer += (secondNumber + i);
    }
  }
  return answer;
}

module.exports = sumAll
