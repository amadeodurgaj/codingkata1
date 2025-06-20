function SpaceNavigator() {}

SpaceNavigator.prototype.findSpaceship = function(map) {
	if (typeof map !== 'string' || map.trim() === '') {
		return 'Spaceship lost forever.';
	}
	const rows   = map.trim().split('\n');
	const height = rows.length;

	for (let rowIdx = 0; rowIdx < height; rowIdx++) {
		const colIdx = rows[rowIdx].indexOf('X');
		if (colIdx !== -1) {
			return [colIdx, height - rowIdx - 1];
		}
	}

	return 'Spaceship lost forever.';
};