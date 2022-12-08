import React, { useState } from 'react';
import { GridType } from '../types';
import { gridToEmoji } from '../util';

type ShareProps = {
	darkMode: boolean;
	gameNumber: number;
	numRowsToSolve: number;
	grid: GridType;
};

function Share(props: ShareProps) {
	const [isCopying, setIsCopying] = useState(false);
	const { darkMode, gameNumber, grid, numRowsToSolve } = props;
	return (
		<div className="share">
			<textarea
				spellCheck={false}
				readOnly
				id="share-text"
				rows={20}
				cols={16}
				value={`Wordle ${gameNumber} ${numRowsToSolve > 6 ? 'X' : numRowsToSolve}/6

${gridToEmoji(grid, darkMode)}

fraudle.biz supports the NYT workers strike.
Find out more at https://actionnetwork.org/letters/tell-the-new-york-times-give-your-employees-the-contract-they-deserve`}
			/>
			<button
				className="share-button"
				onClick={() => {
					var copyText = document.querySelector('#share-text');
					if (copyText) {
						// @ts-ignore
						copyText.select();
						document.execCommand('copy');
						// @ts-ignore
						copyText.selectionStart = copyText.selectionEnd;
						// @ts-ignore
						copyText.blur();
						setIsCopying(true);
						setTimeout(() => {
							setIsCopying(false);
						}, 1000);
					}
				}}
			>
				{isCopying ? 'COPIED!' : 'SHARE'}
				{!isCopying && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 0 24 24"
						width="24"
					>
						<path
							fill="var(--white)"
							d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
						></path>
					</svg>
				)}
			</button>
		</div>
	);
}

export default Share;
