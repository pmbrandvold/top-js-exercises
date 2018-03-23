var snakeCase = function(string) {
  var phrase = Array.from(string);
  var chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','-'];
  var filteredPhrase = phrase.filter(char => chars.includes(char));
  var newString = filteredPhrase.join('');
  var camelCase = new RegExp("([a-z])([a-z])([A-Z])");
  var wtfCase = new RegExp("([A-z])(\.\.)([A-z])")
  if (filteredPhrase.includes(' ')) {
    newString = newString.split(' ').join('_');
  } else if (filteredPhrase.includes('-')) {
    newString = newString.split('-').join('_');
  } else if (camelCase.test(filteredPhrase.join(''))) {
    var replaceValue = '$1$2_$3';
    newString = filteredPhrase.join('').replace(camelCase, replaceValue);
  } else if (wtfCase.test(phrase.join(''))) {
    newString = phrase.join('').replace(/(\.\.)/g, '_');
  }
  return newString.toLowerCase();
}

module.exports = snakeCase

//replace
