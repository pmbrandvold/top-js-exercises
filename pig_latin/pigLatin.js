function translate(string) {
	var vowels = ['a','e','i','o'];
	var phrase = string.split(' ');
	var newPhrase = [];
	phrase.forEach(word => {
		var letters = Array.from(word);
		var beforeVowel = [];
		var afterVowel = [];
		letters.forEach((letter, index) => {
			if (vowels.indexOf(letter) !== -1) {
				var vowelIndex = index;
				letters.forEach((letter, index) => {
					if (index < vowelIndex) {
						beforeVowel.push(letter);
					} else {
						afterVowel.push(letter);
					}
				});
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
