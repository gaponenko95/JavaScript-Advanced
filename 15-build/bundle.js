(function () {
	'use strict';

	class Task {
		constructor(message) {
			this.message = message;
		}

		run() {
			console.log(this.message);
		}
	}

	class User extends Task {
		constructor(message) {
			super(message);
		}

		do() {
			this.run();
		}
	}

	const user = new User('Test message');

	user.do();

})();
