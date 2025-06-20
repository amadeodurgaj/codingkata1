describe('Find Spaceship', function() {
	let navigator;

	beforeEach(function() {
		navigator = new SpaceNavigator();
	});

	it('should return [7,2] for the sample map', function() {
		const map =
			'..........\n' +
			'..........\n' +
			'..........\n' +
			'.......X..\n' +
			'..........\n' +
			'..........';
		expect(navigator.findSpaceship(map)).toEqual([7, 2]);
	});

	it('should return [0,0] when X is the only character', function() {
		expect(navigator.findSpaceship('X')).toEqual([0, 0]);
	});

	it('should return [3,4] for a map where X is on the top row', function() {
		const map =
			'...X..\n' +
			'......\n' +
			'......\n' +
			'......\n' +
			'......';
		// Height = 5, X found in rowIdx 0 → y = 5-0-1 = 4
		expect(navigator.findSpaceship(map)).toEqual([3, 4]);
	});

	it('should return "Spaceship lost forever." when no ship is present', function() {
		const map =
			'....\n' +
			'....\n' +
			'....';
		expect(navigator.findSpaceship(map)).toEqual('Spaceship lost forever.');
	});

	it('should handle blank or non-string input gracefully', function() {
		expect(navigator.findSpaceship('')).toEqual('Spaceship lost forever.');
		expect(navigator.findSpaceship(null)).toEqual('Spaceship lost forever.');
	});
});