import { SquareValue, GridType } from '../types';

export function determineGameNumber() {
	return Math.floor(
		(new Date().setHours(0, 0, 0) - new Date('06/19/2021').getTime()) / (24 * 60 * 60 * 1000)
	);
}
export function generateGrid(numRowsToSolve: number): GridType {
	const X = SquareValue.UNKNOWN;
	const Y = SquareValue.YES;
	const grid: GridType = [
		[X, X, X, X, X],
		[X, X, X, X, X],
		[X, X, X, X, X],
		[X, X, X, X, X],
		[X, X, X, X, X],
		[X, X, X, X, X],
	];

	for (var i = 0; i < numRowsToSolve - 1; i++) {
		const rowsRemaining = numRowsToSolve - i - 1;
		for (var j = 0; j < 5; j++) {
			let value = SquareValue.NO;
			const roll = Math.floor(Math.random() * 100) - 10 * (rowsRemaining - 1);
			if (roll > 75) {
				value = SquareValue.YES;
			} else if (roll > 45) {
				value = SquareValue.ALMOST;
			}
			grid[i][j] = value;
		}

		// If we accidentally solve this row randomly, wipe out the first square
		if (grid[i].every((value) => value === SquareValue.YES)) {
			grid[i][0] = SquareValue.NO;
		}
	}

	// Make sure the last row is solved
	if (numRowsToSolve < 7) {
		grid[numRowsToSolve - 1] = [Y, Y, Y, Y, Y];
	}

	return grid;
}

export function determineNumRowsToSolve(grid: GridType) {
	let numRowsToSolve = 7;
	for (var i = 0; i < 6; i++) {
		var row = grid[i];
		if (row.every((value) => value === SquareValue.YES)) {
			numRowsToSolve = i + 1;
		}
	}
	return numRowsToSolve;
}

export function incrementSquare(currentValue: SquareValue) {
	switch (currentValue) {
		case SquareValue.YES:
			return SquareValue.NO;
		case SquareValue.UNKNOWN:
			return SquareValue.UNKNOWN;
		case SquareValue.NO:
			return SquareValue.ALMOST;
		case SquareValue.ALMOST:
			return SquareValue.YES;
	}
}

export function gridToEmoji(grid: GridType, darkMode: boolean) {
	return grid
		.map((row) => {
			return row
				.map((value) => {
					switch (value) {
						case SquareValue.YES:
							return '❎';
						case SquareValue.UNKNOWN:
							return '';
						case SquareValue.NO:
							return darkMode ? '🙅' : '🙅';
						case SquareValue.ALMOST:
							return '😵';
						default:
							return '';
					}
				})
				.join('');
		})
		.join('\n')
		.trim();
}
