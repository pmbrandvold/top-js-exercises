var palindromes = function(string) {
  var forwardString = Array.from(string);
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var filteredForwardString = forwardString.filter((char) => alphabet.includes(char));
  var backwardString = Array.from(filteredForwardString);
  var newString = backwardString.reverse().join('');
  var originalString = filteredForwardString.join('');
  if (newString.toLowerCase() === originalString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromes
