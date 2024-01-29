function getData(url, errorMassage) {
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(`${errorMassage}${response.status}`);
		}
		return response.json();
	});
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Cant get pokemon, ERROR -')
	.then(({ abilities }) => {
		return getData(abilities[0].ability.url, 'Cant get ability, ERROR - ');
	})
	.then(({ effect_entries }) => {
		console.log(effect_entries[1].effect);
	})
	.catch((error) => console.log(error.message));
