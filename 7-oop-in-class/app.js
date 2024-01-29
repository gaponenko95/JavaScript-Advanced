'use strict';

class Personage {
	constructor(options) {
		this.race = options.race;
		this.name = options.name;
		this.language = options.language;
	}
	speak() {
		console.log(`Speak on ${this.language} - My name is ${this.name}!`);
	}
}

class Orc extends Personage {
	constructor(options) {
		super(options);
		this.weapon = options.weapon;
	}
	speak() {
		console.log(
			`${this.race} speak on ${this.language} - My name is ${this.name}!`
		);
	}
	strike() {
		console.log(`${this.name} strikes with ${this.weapon}!`);
	}
}

class Elf extends Personage {
	constructor(options) {
		super(options);
		this.spellType = options.spellType;
	}
	speak() {
		console.log(
			`${this.race} speak on ${this.language} - My name is ${this.name}!`
		);
	}
	createSpell() {
		console.log(`${this.name} casts a spell ${this.spellType}!`);
	}
}

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
