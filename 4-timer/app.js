function updateCountdown() {
	const now = new Date();
	const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0);

	const timeLeft = newYear - now;
	const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
	const days = Math.floor(
		(timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
	);
	const hours = Math.floor(
		(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	document.getElementById(
		'countdown'
	).innerHTML = `${months} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
}

setInterval(updateCountdown, 1000);

updateCountdown();
