// Given an array of positive integers, find the length of the longest subsequence
// where every adjacent pair of elements in the subsequence is coprime (where the greatest common divisor, or GCD, is 1).
//
// Example:
//
//     longestCoprimeSubsequence([6, 12, 4, 8])
//     > 1 // none are coprime
//
// longestCoprimeSubsequence([4, 3, 6, 9, 7, 2])
// > 4 // [4, 3, 7, 2], where gcd(4,3)=1, gcd(3,7)=1, gcd(7,2)=1

//Euclides algorithm
const gcd = (a, b) => {

	if (b === 0) return a;

	return gcd(b, a % b);

}

const longestCoprimeSubsequence = (arr) => {

    if (!arr?.length) return;

    const subsequences = [];

    //Base iterator
    for (let i = (arr.length - 1); i >= 0; i--) {

    	const subsequence = Array.from(arr.length);

    	subsequence[i] = arr[i];

		//Iterate to the left
    	for (let j = (i - 1); j >= 0; j--) {

    		const valueA = arr[j];

    		const valueB = arr[j + 1];

    		if (gcd(valueA, valueB) === 1) subsequence[j] = valueA;

    	}

		//Iterate to the right
    	for (let x = (i + 1); x < arr.length; x++) {

    		const valueA = arr[x];

    		const valueB = arr[x - 1];

    		if (gcd(valueA, valueB) === 1) subsequence[x] = valueA;

    	}

    	if (subsequence.length > 1) subsequences.push(subsequence);

    }

    return subsequences?.length > 1
        ? subsequences.reduce((p , c) => p.length > c.length ? p : c, []).filter(Boolean)
        : 1;


}


function make() {

	console.log(longestCoprimeSubsequence([4, 9, 8, 25, 12, 49]));

}

make();
