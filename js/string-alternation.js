//Given a string s consisting of letters, convert each character to its opposite case that is,
// change every lowercase letter to uppercase, and every uppercase letter to lowercase.
// Bonus: add an "alternate" parameter that converts the whole string to AlTeRnAtE cAsE!
//
// Examples:
//
// let alternating = true
//
// toggleChar("Hello, world!")
// > "hELLO, WORLD!"
//
// toggleChar("HeheHeheHEheheHeH")
// > "hEHEhEHEheHEHEhEh"
//
// toggleChar("This will be alternated", alternating)
// > "ThIs WiLl Be AlTeRnAtEd"


function isUpperCase(char) {
	return char === char.toUpperCase() && char !== char.toLowerCase();
}

const toggleChar = (str, alternating = false) => {

	let toggle = alternating;

	return str
	.split('')
	.map((char) => {

		if (alternating) {
			toggle = char === ' ' ? true : !toggle;
			return toggle ? char.toLowerCase() : char.toUpperCase();
		}

		if (isUpperCase(char)) return char.toLowerCase();
		else return char.toUpperCase();
		

	})
	.join('');

}

function make() {

	console.log(toggleChar("hELLO, WORLD!"));

}

make();
