'use strict';

class Billing {
	constructor(amount) {
		this.amount = amount;
	}
}

class FixBilling extends Billing {
	calculateTotal() {
		return this.amount;
	}
}

class HourBilling extends Billing {
	constructor(amount, hours) {
		super(amount);
		this.hours = hours;
	}

	calculateTotal() {
		return this.amount * this.hours;
	}
}

class ItemBilling extends Billing {
	constructor(amount, items) {
		super(amount);
		this.items = items;
	}

	calculateTotal() {
		return this.amount * this.items;
	}
}
