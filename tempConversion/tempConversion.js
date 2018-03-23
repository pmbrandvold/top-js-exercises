var ftoc = function(temperature) {
  let convertedTemp = (temperature - 32) * 5 / 9;
  if (convertedTemp % 2 === 0) {
    return convertedTemp;
  } else {
    convertedTemp = Number(convertedTemp.toFixed(1));
    return convertedTemp;
  }
}

var ctof = function(temperature) {
  let convertedTemp = (temperature * 9 / 5) + 32;
  if (convertedTemp % 2 === 0) {
    return convertedTemp;
  } else {
    convertedTemp = Number(convertedTemp.toFixed(1));
    return convertedTemp;
  }
}

module.exports = {
  ftoc,
  ctof
}
