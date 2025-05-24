describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return 1 for 1', function() {
		expect(calculator.add('1')).toEqual(1);
	});

	it('should return 3 for 1,2', function() {
		expect(calculator.add('1,2')).toEqual(3);
	});

	it('should return 28 for 1,27', function() {
		expect(calculator.add('1,27')).toEqual(28);
	});

	it('should return 53 for 15,17,21', function() {
		expect(calculator.add('15,17,21')).toEqual(53);
	});

	it('should return 78 for 1,5,27,45', function() {
		expect(calculator.add('1,5,27,45')).toEqual(78);
	});

	it('should return 11111 for 1,10,100,1000,10000', function() {
		expect(calculator.add('1,10,100,1000,10000')).toEqual(11111);
	});

	it('should return 10 for A,10', function() {
		expect(calculator.add('A,10')).toEqual(10);
	});
});
