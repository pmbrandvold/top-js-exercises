var removeFromArray = function(array) {
  let iterate = arguments.length;
  let newArray = Array.from(array);

  for (let i = 1; i < iterate; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === arguments[i]) {
        newArray.splice(j,1);
        j--;
      }
    }
  }
  return newArray;
}

module.exports = removeFromArray
