var caesar = function(string, cypher) {
  const phrase = Array.from(string);
  let encrypted = [];
  phrase.forEach(char => {
    if (char >= "A" && char <= "z") {
      char = String.fromCharCode((char.charCodeAt() + cypher));
      encrypted.push(char);
    } else {
      encrypted.push(char);
    }
  });
return encrypted.join('');
}

module.exports = caesar
