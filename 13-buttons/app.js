const wrapper = document.querySelector('.wrapper');

let counter = 0;

const count = document.createElement('div');
count.innerHTML = `Число нажатий: ${counter}`;
count.setAttribute('style', 'font-size: 25px;');
document.body.append(count);

for (let i = 0; i < 5; ++i) {
	const el = document.createElement('button');
	el.innerHTML = 'Нажми меня';
	el.setAttribute(
		'style',
		'width: 150px; height: 45px; background-color: #f7df1e; color: #1c1b21; border: 1px solid black; border-radius: 15px; box-shadow: 5px 4px 3px rgb(255, 227, 0);'
	);
	wrapper.append(el);
}

wrapper.addEventListener('click', (event) => {
	if (event.target.tagName === 'button') {
		resetButtons();
		counter++;
		count.innerHTML = `Число нажатий: ${counter}`;
		event.target.innerHTML = 'Нажато';
		event.target.style.boxShadow = 'none';
	}
});

function resetButtons() {
	Array.from(wrapper.children).forEach((button) => {
		button.innerHTML = 'Нажми меня';
		button.style.boxShadow = '5px 4px 3px rgb(255, 227, 0)';
	});
}
