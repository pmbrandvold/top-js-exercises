var leapYears = function(year) {
  let breakItDown = (year+"").split(''); //turn the number into an array
  if (breakItDown[breakItDown.length-1] == '0' && breakItDown[breakItDown.length-2] == '0') { //if a century year
    if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else { //not a century year
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = leapYears
