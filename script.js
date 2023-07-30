// https://hephaistos.online/docs/guides/integration/dice-rolls
// https://symbiote-docs.talespire.com/api_doc_v0_1.md.html

const diceTypes = [];

function loadDiceTypes(diceConfig) {
	if (!diceTypes.length) {
		let match;

		for (let i in diceConfig) {
			if (match = i.match(/^d(\d+)$/)) {
				diceTypes.push({ val: parseInt(match[1]), key: i });
			}
		}

		diceTypes.sort((a, b) => a.val - b.val);
	}
}

function diceConfigToTaleSpire(diceConfig) {
	loadDiceTypes(diceConfig);

	let result = [];

	for (let { key } of diceTypes) {
		if (diceConfig[key] > 0) {
			result.push(`${diceConfig[key]}${key}`);
		}
	}

	result = result.join('+');

	if (diceConfig.add) {
		result += diceConfig.add > 0
			? '+'
			: '-';

		result += Math.abs(diceConfig.add);
	}

	return result;
}

function getNiceCategory(category) {
	return category.replace(/([a-z])([A-Z])/g, '$1 $2');
}

document.addEventListener("hephaistos_on_roll", (e) => {
	// Talespire cannot handle any multiplier as of writting
	// this so we let Hephaistos do the calculation for us.
	if (e.detail.dice.multiply != 1) {
		return;
	}

	e.preventDefault();
	let diceString = diceConfigToTaleSpire(e.detail.dice);
	TS.dice.putDiceInTray([{ name: `${e.detail.name} - ${getNiceCategory(e.detail.category)}`, roll: diceString }]);
});

// If it is a roll Talespire doesn't support let Hephaistos
// run calculations on their end and send results to TS.
document.addEventListener("hephaistos_on_roll_result", (e) => {
	e.preventDefault();
	TS.dice.sendDiceResult([{ name: `${e.detail.name} - ${getNiceCategory(e.detail.category)}`, result: e.detail.finalResult }]);
});