// You're building a pizza ordering system that enforces strict ingredient layering rules. 
// Given an array of pizza layers (bottom to top) and a set of rules where each rule states 
// that ingredient A must appear somewhere below ingredient B, write a function that determines whether the pizza is valid. 
// If any rule is violated, return the pair [A, B] that was violated first (in the order the rules are given).
// If the pizza is valid, return true.
//
// Examples:
//
//     const layers = ["dough", "sauce", "cheese", "pepperoni", "basil"];
const rules = [
    ["sauce", "cheese"],
    ["cheese", "pepperoni"],
    ["dough", "basil"],
];
const rules2 = [
    ["cheese", "pepperoni"],
    ["cheese", "sauce"], // "it's under the sauce"
];

// validatePizza(layers, rules);
// > true
//
// validatePizza(layers, rules2);
// > ['cheese', 'sauce']


const validatePizza = (layers, rules) => {

	if (!layers.length) return;

	if (!rules.length) return;

	for (const rule of rules) {

		const indexes = rule.map((rool) => layers.findIndex((layer) => layer === rool));

		for (let i = (indexes.length - 1); i >= 0; i--) {

			const current = indexes[i];

			const previous = indexes[i - 1];

			if (current < previous) return rule;

		}

	}

	return true;

};


function make() {

    console.log(validatePizza(
    	["dough", "sauce", "cheese", "pepperoni", "basil"], 
    	rules2
    ));

}

make();