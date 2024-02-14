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
	constructor(options, weapon) {
		super(options);
		this.weapon = weapon;
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
	constructor(options, spellType) {
		super(options);
		this.spellType = spellType;
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

const orcOptions = {
	race: 'Orc',
	name: 'Trall',
	language: 'Orcish',
};

const elfOptions = {
	race: 'Elf',
	name: 'Malfurion',
	language: 'Elvish',
};

const orc = new Orc(orcOptions, 'Mace');
const elf = new Elf(elfOptions, 'Divine Ray');

orc.speak();
elf.speak();
orc.strike();
elf.createSpell();
