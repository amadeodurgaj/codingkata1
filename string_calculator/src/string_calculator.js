// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	return string_numbers === '' ? 0 : string_numbers.split(',').reduce((sum, num) => sum + (isNaN(parseInt(num, 10)) ? 0 : parseInt(num, 10)), 0); 
};
