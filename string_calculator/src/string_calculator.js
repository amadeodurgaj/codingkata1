// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	return string_numbers === '' ? 0 : parseInt(string_numbers);
};
