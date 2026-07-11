// Given a string s containing letters and ? wildcards (that can match any letter),
// and a target pattern string pattern, rearrange the entire string however you like.
// Return the maximum number of non-overlapping copies of pattern that can appear in the rearranged result.
//
// Example:
//
// maxPatternCopies("abcabc???", "ac")  // 3
//
// maxPatternCopies("aab??", "aab")  // 1
//
// maxPatternCopies("??????", "abc")  // 2


const maxPatternCopies = (s, pattern) => {

	if (!s) return;
	if (typeof s !== 'string') return;

	let pat = pattern.split('');

	let maxCopies = 0;

	for (let e of s.split('')) {

		if (e === '?') pat.splice(0, 1);
		else {

			const i = pat.indexOf(e);

			if (i > -1) pat.splice(i, 1);

		}

		if (pat.length === 0) {
			maxCopies++
			pat = pattern.split('');
		}

	}


	return maxCopies;


}

function make() {

	console.log(maxPatternCopies("aab??", "aab"));

}

make();