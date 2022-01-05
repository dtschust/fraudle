import React, { useState, useEffect } from 'react';
import './App.css';
import ControlPanel from './Control-Panel';
import Hint from './Hint';
import Grid from './Grid';
import Share from './Share';
import { SquareValue, RowType, GridType } from '../types';
import { generateGrid, determineNumRowsToSolve, determineGameNumber } from '../util';

function App() {
	const [darkMode, setDarkMode] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches
	);

	const [grid, setGrid] = useState(generateGrid(1 + Math.ceil(Math.random() * 4)));
	const [gameNumber, setGameNumber] = useState(determineGameNumber());

	useEffect(() => {
		const addOrRemove = darkMode ? 'add' : 'remove';
		document.getElementsByTagName('body')[0].classList[addOrRemove]('darkmode');
	}, [darkMode]);

	const numRowsToSolve = determineNumRowsToSolve(grid);

	function changeSquare(rowIndex: number, colIndex: number, value: SquareValue) {
		// TODO: Meta unfurls
		// TODO: FavIcon and title
		const newGrid = grid.map((row: RowType): RowType => [...row]) as GridType;
		newGrid[rowIndex][colIndex] = value;

		// Check if this change solves an earlier row
		const row = newGrid[rowIndex];
		if (row.every((val) => val === SquareValue.YES)) {
			const X = SquareValue.UNKNOWN;
			for (var i = rowIndex + 1; i < 6; i++) {
				newGrid[i] = [X, X, X, X, X];
			}
		}

		setGrid(newGrid);
	}

	return (
		<div id="game">
			<header>
				<div className="title">FRAUDLE</div>
				<div className="subtitle">You're Only Cheating Yourself!</div>
			</header>
			<ControlPanel
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				gameNumber={gameNumber}
				setGameNumber={setGameNumber}
				numRowsToSolve={numRowsToSolve}
				setGrid={setGrid}
			/>
			<Grid grid={grid} changeSquare={changeSquare} numRowsToSolve={numRowsToSolve} />
			<Hint key={gameNumber} gameNumber={gameNumber} />
			<Share
				darkMode={darkMode}
				gameNumber={gameNumber}
				numRowsToSolve={numRowsToSolve}
				grid={grid}
			/>
			<div className="about">
				<div>
					Made by{' '}
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/nuncamind"
					>
						@nuncamind
					</a>{' '}
					and inspired by{' '}
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.powerlanguage.co.uk/wordle/"
					>
						Wordle
					</a>
					.
				</div>
				<div>
					Hints lovingly scraped from{' '}
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://crosswordheaven.com/"
					>
						crosswordheaven
					</a>
					.
				</div>
			</div>
		</div>
	);
}

export default App;
