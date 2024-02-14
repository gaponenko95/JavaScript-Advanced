function race(promises) {
	return new Promise((resolve, reject) => {
		for (const promise of promises) {
			promise.then(
				(result) => resolve(result),
				(error) => reject(error)
			);
		}
	});
}

const promise1 = new Promise((resolve) =>
	setTimeout(resolve, 1000, 'Promise 1 resolved')
);
const promise2 = new Promise((resolve, reject) =>
	setTimeout(reject, 500, 'Promise 2 rejected')
);

race([promise1, promise2])
	.then((result) => console.log('Resolved:', result))
	.catch((error) => console.error('Rejected:', error));
