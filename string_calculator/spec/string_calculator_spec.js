describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return the number itself for a single number', function() {
		expect(calculator.add('1')).toEqual(1);
	});

	it('should return the sum of two numbers', function() {
		expect(calculator.add('1,2')).toEqual(3);
	});

	it('should return the sum of one and a big number', function() {
		expect(calculator.add('1,27')).toEqual(28);
	});

	it('should return the sum of three numbers', function() {
		expect(calculator.add('15,17,21')).toEqual(53);
	});

	it('should return the sum of four numbers', function() {
		expect(calculator.add('1,5,27,45')).toEqual(78);
	}); 

	it('should return the sum of five numbers and give 11111', function() {
		expect(calculator.add('1,10,100,1000,10000')).toEqual(11111);
	});

	it('should return only the number when a character is put', function() {
		expect(calculator.add('A,10')).toEqual(10);
	});

});
