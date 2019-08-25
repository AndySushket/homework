function arrayOfRandomIntegersInRange(min, max, count = 1) {
	const array = [];
	for (let i = 0; i < count; i++){
		array.push(Math.floor(Math.random()*(max - min) + min))
	}
	return array;
}