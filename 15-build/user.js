import { Task } from './task.js';

export class User extends Task {
	constructor(message) {
		super(message);
	}

	do() {
		this.run();
	}
}
