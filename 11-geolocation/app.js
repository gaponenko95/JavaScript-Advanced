function getCurrentPosition() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				resolve({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				});
			},
			(error) => {
				reject(new Error(`Geolocation error: ${error.message}`));
			}
		);
	});
}

getCurrentPosition()
	.then((coordinates) => {
		console.log(coordinates.latitude, coordinates.longitude);
	})
	.catch((error) => {
		console.error(error.message);
	});
