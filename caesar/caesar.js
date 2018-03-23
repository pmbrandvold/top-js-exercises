var caesar = function(string, cypher) {
  const phrase = Array.from(string);
  let encrypted = [];
  if (cypher < 0) {
    cypher = cypher + 26;
  }
  phrase.forEach(char => {
    if (char >= "A" && char <= "Z") {
      char = (((char.charCodeAt() - 65) + cypher) % 26) + 65;
      encrypted.push(String.fromCharCode(char));
    } else if (char >= "a" && char <= "z") {
      char = (((char.charCodeAt() - 97) + cypher) % 26) + 97;
      encrypted.push(String.fromCharCode(char));
    } else {
      encrypted.push(char);
    }
  });
return encrypted.join('');
}

module.exports = caesar
