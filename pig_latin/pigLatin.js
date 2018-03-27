function translate(string) {
	var vowels = ['a','e','i','o'];
	var phrase = string.split(' ');
	var newPhrase = [];
	phrase.forEach(word => {
		var letters = Array.from(word);
		var beforeVowel = [];
		var afterVowel = [];
		var vowelIndex = 0;
		for (var i = 0; i < letters.length; i++) {
			if (vowels.indexOf(letters[i]) !== -1) {
				var vowelIndex = i;
				break;
			}
		}
		letters.forEach((letter, index) => {
			if (index < vowelIndex) {
				beforeVowel.push(letter);
			} else {
				afterVowel.push(letter);
			}
		});
		var newWord = afterVowel.join('') + beforeVowel.join('') + 'ay';
		newPhrase.push(newWord);
	});
	return newPhrase.join(' ');
}

module.exports = {
	translate
}
