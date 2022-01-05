import React from 'react';
import classNames from 'classnames';
import { SquareValue } from '../types';
import { incrementSquare } from '../util';

type SquareProps = {
	rowIndex: number;
	colIndex: number;
	changeSquare: Function;
	value: SquareValue;
	numRowsToSolve: number;
};
function Square(props: SquareProps) {
	const { changeSquare, rowIndex, colIndex, value, numRowsToSolve } = props;
	const onClick = () => {
		changeSquare(rowIndex, colIndex, incrementSquare(value));
	};
	return (
		<button
			disabled={numRowsToSolve <= rowIndex + 1}
			className={classNames('square', {
				correct: value === SquareValue.YES,
				absent: value === SquareValue.NO,
				present: value === SquareValue.ALMOST,
				unknown: value === SquareValue.UNKNOWN,
			})}
			onClick={onClick}
		/>
	);
}

export default Square;
