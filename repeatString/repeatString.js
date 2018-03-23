var repeatString = function(inputString, repeatTimes) {
  if (repeatTimes < 0) {
    return 'ERROR';
  }
  let string = '';
  for (let i = 0; i < Number(repeatTimes); i++) {
    string += inputString;
  }
  return string;
}

module.exports = repeatString
