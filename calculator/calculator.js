function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (numbers) {
	if (numbers.length === 0) {
		return 0;
	}
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i]
	}
	return total;
}

function multiply (numbers) {
	let total = 1;
	for (let i = 0; i < numbers.length; i++) {
		total *= numbers[i]
	}
	return total;
}

function power(base, power) {
	let total = base;
	for (let i = 0; i < power-1; i++) {
		total *= base;
	}
	return total;
}

function factorial(number) {
	if (number === 0) {
		return 1;
	}
	let total = number
	for (let i = number-1; i > 0; i--) {
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
