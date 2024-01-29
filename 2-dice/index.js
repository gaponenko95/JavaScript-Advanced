'use strict';

function rollDice(diceType) {
	const availableDiceTypes = [
		{ name: 'd4', minValue: 1, maxValue: 4 },
		{ name: 'd6', minValue: 1, maxValue: 6 },
		{ name: 'd8', minValue: 1, maxValue: 8 },
		{ name: 'd10', minValue: 1, maxValue: 10 },
		{ name: 'd12', minValue: 1, maxValue: 12 },
		{ name: 'd16', minValue: 1, maxValue: 16 },
		{ name: 'd20', minValue: 1, maxValue: 20 },
	];

	const selectedDice = availableDiceTypes.find(
		(dice) => dice.name === diceType
	);
	if (!selectedDice) {
		return null;
	}

	const { minValue, maxValue } = selectedDice;

	return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

console.log(rollDice('d6'));
