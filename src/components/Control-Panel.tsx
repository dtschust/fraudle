import React from 'react';
import { generateGrid } from '../util';

type ControlPanelProps = {
	darkMode: boolean;
	setDarkMode: Function;
	gameNumber: number;
	setGameNumber: Function;
	setGrid: Function;
	numRowsToSolve: number;
};
function ControlPanel(props: ControlPanelProps) {
	const { darkMode, setDarkMode, gameNumber, setGameNumber, numRowsToSolve, setGrid } = props;
	return (
		<div className="control-panel">
			<div className="control-panel-item">
				<span className="control-panel-number">
					<span className="control-panel-label">Dark Mode:</span>
					<button
						style={{ width: '107px' }}
						onClick={() => {
							setDarkMode(!darkMode);
						}}
					>
						{darkMode ? 'Disable' : 'Enable'}
					</button>
				</span>
			</div>
			<div className="control-panel-item">
				<span className="control-panel-number">
					<span className="control-panel-label">Game Number:</span>
					<button onClick={() => setGameNumber(gameNumber - 1)}>-</button>
					<div className="control-panel-number-label">{gameNumber}</div>
					<button onClick={() => setGameNumber(gameNumber + 1)}>+</button>
				</span>
			</div>
			<div className="control-panel-item">
				<span className="control-panel-number">
					<span className="control-panel-label">Solve on Guess #:</span>
					<button
						onClick={() => setGrid(generateGrid(numRowsToSolve - 1))}
						disabled={numRowsToSolve <= 1}
					>
						-
					</button>
					<div className="control-panel-number-label">
						{numRowsToSolve > 6 ? 'X' : numRowsToSolve}
					</div>
					<button
						onClick={() => setGrid(generateGrid(numRowsToSolve + 1))}
						disabled={numRowsToSolve >= 7}
					>
						+
					</button>
				</span>
			</div>
		</div>
	);
}

export default ControlPanel;
