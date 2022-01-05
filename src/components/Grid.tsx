import React from 'react';
import Row from './Row';
import { GridType } from '../types';

type GridProps = {
	grid: GridType;
	changeSquare: Function;
	numRowsToSolve: number;
};

function Grid(props: GridProps) {
	const { grid, changeSquare, numRowsToSolve } = props;
	return (
		<div className="grid">
			{grid.map((row, i) => {
				return (
					<Row
						key={i}
						rowIndex={i}
						row={row}
						changeSquare={changeSquare}
						numRowsToSolve={numRowsToSolve}
					/>
				);
			})}
			<div className="grid-tip">Tap any tile to change its value</div>
		</div>
	);
}

export default Grid;
