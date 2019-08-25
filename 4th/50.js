function convertTime(number = 0) {
	return number === 0 || number % 24 === 0
		? "12AM" : (number % 12 === 0 && number % 24 !== 0
			? "12PM" : `${number - Math.floor(number / 12) * 12}${Math.floor(number / 12) % 2 === 0 ? "AM" : "PM"}`)
}