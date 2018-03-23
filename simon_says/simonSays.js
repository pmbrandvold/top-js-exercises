function echo(input) {
	return input;
}

function shout(input) {
	for (let phrase of input) {
		return input.toUpperCase();
	}
}

function repeat(input, n) {
	if (!n) {
		return input + " " + input;
	} else {
		let newString = [];
		for (let i = 0; i < n; i++) {
			newString.push(input);
		}
		return newString.join(' ');
	}
}

function pieceOfWord(string, characters) {
	let stringArray = Array.from(string);
	let print = '';
	for (let i = 0; i < characters; i++) {
		print += stringArray[i];
	}
	return print;
}

function firstWord(string) {
	let words = string.split(' ');
	return words[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(string) {
	let words = string.split(' ');
	let capWords = [];
	words.forEach(function(word, index) {
		if (index === 0) {
			capWords.push(capitalize(word));
		} else if (word === 'the' || word === 'over' || word === 'and' || word === 'of') {
			capWords.push(word);
		} else {
			capWords.push(capitalize(word));
		}
	});
	return capWords.join(' ');
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}
