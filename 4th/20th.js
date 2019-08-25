function convertThreeToSixHexColor(hex) {
	return `#${hex.toString().replace('#', "").split("").map((code)=> code + code).join("")}`;
}