function translate(string) {
	var vowels = ['a','e','i','o','u'];
	var phrase = string.split(' ');
	phrase.forEach(word => {
		var letters = Array.from(word);
		console.log(letters);
		letters.forEach(letter => {
			if (vowels.indexOf(letter) !== -1) {
				console.log(letter);
			}
		});
	});
}
				//split at the vowel
				//remove everything from before the split and store it in "replace"
				//add "replace" on to the end of the word
			//add to newPhrase array
		//return newPhrase.join(' ');


module.exports = {
	translate
}
