//Given a text string and a pattern, implement a fuzzy string search using the Bitap algorithm
// that finds all positions in the text where the pattern matches with at most k errors (insertions, deletions, or substitutions).
// Return an array of objects containing the position and the number of errors at that match.
//
// Example:
//
// > fuzzySearch("the cat sat on the mat", "cat", 0);
// > [{ position: 4, errors: 0 }]
//
// > fuzzySearch("cassidoo", "cool", 1);
// > []
//
// > fuzzySearch("cassidoo", "cool", 3);
// > [{ "position": 3, "errors": 3 }, { "position": 4, "errors": 2 }]


function ownFuzzySearch(sentence, query, k) {

	if (!sentence || !query || query.length <= k || sentence.length <= k) return null;

	const result = [];

	for (let i = (sentence.length - query.length); i >= 0; i--) {

		const querying = sentence.substring(i, i + query.length);

        //Search reducing query length.
		for (let q = 0; q <= k; q++) {

            let pair;

            //Slicing the query from right to left
			for (let ml = query.length; ml >= 0 ; ml--) {
				const search = query.substring(q, ml);

				if (search && querying.includes(search)) {
                    pair = { position: i, errors: query.length - search.length };
                    break;
                }
			}

            if (pair) {
                if (pair.errors === 0) return [ pair ];
                result.push(pair);
                break;
            }
		}


	}

	return result;

}

function hammingFuzzySearch(sentence, query, k) {

	if (!sentence || !query || query.length <= k || sentence.length <= k) return null;

	const result = [];

	for (let i = (sentence.length - query.length); i >= 0; i--) {

		const querying = sentence.substring(i, i + query.length);

		let errors = 0;

		for (let q = 0; q <= query.length; q++) {

			if (querying[q] !== query[q]) errors++;

		}

		const pair = { position: i, errors };

		if (errors === 0) return [ pair ];
		else if (errors <= k) result.push(pair);

	}

	return result;

}

function bitapFuzzySearch(sentence, query, k) {

}

function make() {

	console.log(
        hammingFuzzySearch("the cat sat on the mat", "cat ", 0)
		//ownFuzzySearch("cassidoo", "cool", 3)
	)
	// casi cool 3
	// sido cool 3
	// idoo cool 2

	// cool -> casi match 0, 3
	// cool -> asid
	// cool -> sido match 3, 3
	// cool -> idoo match 4, 2
	// cool ->


}

make();
