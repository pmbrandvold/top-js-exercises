var reverseString = function(input) {
  let breakItDown = input.split('');
  let iterate = input.length;
  let newString = '';

  for (let i = iterate - 1; i >= 0; i--) {
    newString += breakItDown[i];
  }
  return newString;
}

module.exports = reverseString
