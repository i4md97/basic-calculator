"use strict";

const simpleWebCalculator = () => {
	let operator = false;
	const screen = document.querySelector('.screen');
	const keys = document.querySelector('.keys');
	const clearButton = document.querySelector('.clear');
	const resultButton = document.querySelector('.eval');

	/* Press keys */
	keys.addEventListener('click', (e) => {
		let key = e.target;
		let text = screen.textContent;
		if (key.classList.contains('eval')) return;
		if (key.classList.contains('operator') && operator) return;

		if (key.classList.contains('operator')) {
			operator = true;
		} else {
			operator = false;
		}

		if (key.classList.contains('dot') && text.match(/\./g)) return;

		screen.textContent += key.textContent;
	});

	/* Clear */
	clearButton.addEventListener('click', () => {
		screen.textContent = "";
	});

	/* Click result */
	resultButton.addEventListener('click', () => {
		const parse = (str) => Function(`'use strict'; return (${str})`)();
		try {
			let text = screen.textContent;
			text = text.replace(/÷/g, '/');
			text = text.replace(/x/g, '*');
			let result = parse(text);
			screen.textContent = result;
		} catch(e) {
			console.log(e);
		}
	});
}

document.addEventListener('DOMContentLoaded', simpleWebCalculator);