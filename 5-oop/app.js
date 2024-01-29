'use strict';

//// create Personage

const Personage = function (options) {
	this.race = options.race;
	this.name = options.name;
	this.language = options.language;
};
Personage.prototype.speak = function () {
	console.log(`Speak on ${this.language} - My name is ${this.name}!`);
};

//// create Orc

const Orc = function (options) {
	Personage.apply(this, arguments);
	this.weapon = options.weapon;
};
Orc.prototype = Object.create(Personage.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.strike = function () {
	console.log(
		`Speak on ${this.language} - ${this.name} strikes with ${this.weapon}!`
	);
};

//// create Elf

const Elf = function (options) {
	Personage.apply(this, arguments);
	this.spellType = options.spellType;
};
Elf.prototype = Object.create(Personage.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.createSpell = function () {
	console.log(
		`Speak on ${this.language} - ${this.name} casts a spell ${this.spellType}!`
	);
};

const orc = new Orc({
	race: 'Orc',
	name: 'Trall',
	language: 'Orcish',
	weapon: 'Mace',
});
const elf = new Elf({
	race: 'Elf',
	name: 'Malfurion',
	language: 'Elvish',
	spellType: 'Divine Ray',
});

orc.speak();
elf.speak();
orc.strike();
elf.createSpell();
