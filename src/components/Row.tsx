import React from 'react';
import Square from './Square';
import { RowType } from '../types';

type RowProps = {
	rowIndex: number;
	row: RowType;
	changeSquare: Function;
	numRowsToSolve: number;
};

function Row(props: RowProps) {
	const { rowIndex, row, changeSquare, numRowsToSolve } = props;
	return (
		<div className="row">
			{row.map((squareValue, j) => {
				return (
					<Square
						key={`${rowIndex},${j}`}
						rowIndex={rowIndex}
						colIndex={j}
						changeSquare={changeSquare}
						value={squareValue}
						numRowsToSolve={numRowsToSolve}
					/>
				);
			})}
		</div>
	);
}

export default Row;
