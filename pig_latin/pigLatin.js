function translate(string) {
	function translate(string) {
		var phrase = string.split(' ');
		phrase.forEach(word => {
			var letters = Array.from(word);
			console.log(letters);
		});
	}
}
	//separate phrase into array split on spaces
	//separate each index of phrase array by letter
		//for each
			//iterate until you find a vowel
				//split at the vowel
				//remove everything from before the split and store it in "replace"
				//add "replace" on to the end of the word
			//add to newPhrase array
		//return newPhrase.join(' ');


module.exports = {
	translate
}
