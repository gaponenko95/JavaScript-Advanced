class Car {
	#brand;
	#model;
	#mileage;

	constructor(options) {
		this.#brand = options.brand;
		this.#model = options.model;
		this.#mileage = options.mileage;
	}

	get mileage() {
		return console.log(this.#mileage);
	}

	set mileage(mileage) {
		return (this.#mileage = mileage);
	}

	info() {
		console.log(
			`brand - '${this.#brand}', model - '${this.#model}', mileage - ${
				this.#mileage
			}`
		);
	}
}

const carBmw = new Car({ brand: 'BMW', model: 'X3', mileage: 43000 });

carBmw.mileage = 56000;
carBmw.mileage;
carBmw.info();
