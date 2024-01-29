function validateAge(dateOfBirth) {
	const birthDate = new Date(dateOfBirth);

	const currentDate = new Date();

	const ageInMilliseconds = currentDate - birthDate;

	const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

	return ageInYears >= 14;
}

const dateOfBirth = '2010-01-01';
const isValidAge = validateAge(dateOfBirth);

console.log(isValidAge);
