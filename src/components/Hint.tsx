import React, { useState } from 'react';
import answers from '../util/answers';
import clues from '../util/clues';

type HintProps = {
	gameNumber: number;
};

function Hint(props: HintProps) {
	const [numHints, setNumHints] = useState(0);
	const { gameNumber } = props;

	const hints = [];

	if (numHints >= 1) {
		hints.push(
			<div>
				Hint #1: <span style={{ fontWeight: 'bold' }}>{clues[gameNumber]}</span>
			</div>
		);
	}

	if (numHints >= 2) {
		hints.push(
			<div>
				Hint #2:{' '}
				<span style={{ fontWeight: 'bold' }}>
					Rhymes with abomina{answers[gameNumber]}.
				</span>
			</div>
		);
	}

	if (numHints >= 3) {
		hints.push(
			<div>
				Hint #3: Jesus Christ, the answer is{' '}
				<span style={{ fontWeight: 'bold' }}>{answers[gameNumber]}</span>.
			</div>
		);
	}

	let button;
	if (numHints === 0) {
		button = (
			<button
				onClick={() => {
					setNumHints(numHints + 1);
				}}
			>
				Want a hint at the answer?
			</button>
		);
	} else if (numHints < 3) {
		button = (
			<button
				onClick={() => {
					setNumHints(numHints + 1);
				}}
			>
				Want another hint?
			</button>
		);
	}
	return (
		<div className="hint">
			{hints.map((hint, i) => (
				<React.Fragment key={i}>{hint}</React.Fragment>
			))}
			{button}
		</div>
	);
}

export default Hint;
