const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
	const { abilities } = JSON.parse(this.responseText);

	const abilityRequest = new XMLHttpRequest();
	abilityRequest.open('GET', abilities[0].ability.url);
	abilityRequest.send();

	abilityRequest.addEventListener('load', function () {
		const { effect_entries } = JSON.parse(this.responseText);
		console.log(effect_entries[1].effect);
	});

	abilityRequest.addEventListener('error', function () {
		console.error('Failed to load ability data!');
	});
});

request.addEventListener('error', function () {
	console.error('Failed to load Pokemon data!');
});
