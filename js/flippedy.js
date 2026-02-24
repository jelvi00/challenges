//You are given a string consisting of lowercase words, each separated by a single space. Determine how many vowels appear in the first word. Then, reverse each following word that has the same vowel count.

// Examples:

// flippedy("cat and mice")
// > "cat dna mice"

// flippedy("banana healthy")
// > "banana healthy"

const vowels = ['a', 'e', 'i', 'o', 'u'];

function flippedy(sentence) {
	if (!sentence) return sentence;

	const splitted = sentence.split(' ');
	const firstWordVowelsCount = !splitted.length ? 0 : splitted[0]
		.split('')
		.reduce((acc, current) => vowels.includes(current) ? acc + 1 : acc, 0);

	return !firstWordVowelsCount
		? sentence
		: splitted.reduce((newSentence, word, index) => {
			if (!index) return newSentence + word;

			if (firstWordVowelsCount === word.split('').reduce((acc, current) => vowels.includes(current) ? acc + 1 : acc, 0)) {

				let flipped = '';

				for (let i = word.length - 1; i > -1 ; i--) flipped += word[i];


				return newSentence + (' ').concat(flipped);
			} else return newSentence + (' ').concat(word);

		}, "")
	}


function make() {

	const flipped = [
		"casa perro auto libre ramosa",
		"el sol brilla en el mar",
		"elefante sol mar gris pez"
	].map(flippedy);

	console.log(flipped)

}


make()
