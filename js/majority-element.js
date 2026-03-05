// Find the majority element in an array (one that appears more than n/2 times) in O(n) time and O(1) space
// without hashmaps.
// Hint: the Boyer-Moore Voting algorithm might help if you can't figure this one out!
//
// Example:
//
// > majorityElement([2, 2, 1, 1, 2, 2, 1, 2, 2])
// 2
//
// > majorityElement([3, 3, 4, 2, 3, 3, 1])
// 3

const boyerMajorityElement = (arr) => {

    if (!arr?.length) return null;

    let major = null;
    let votes = 0;

    for (const num of arr) {

        if (!votes) major = num;

        votes += (major === num) ? 1 : -1;

    }

    return major;

}

const ownMajorityElement = (arr) => {

    if (!arr?.length) return null;

    const votes = {};

    for (let i = arr.length - 1; i >= 0; i--) {

        const current = arr[i];

        if (!votes[current]) votes[current] = 1;
        else votes[current]++;

    }

    const winner = Object.entries(votes)
        .find(([, vote]) => vote > (arr.length / 2));

    return winner ? winner[0] : null;

}

function make() {

    const winner = ownMajorityElement([2, 2, 1, 1, 2, 2, 1, 2, 2]);

    console.log(winner);
}


make();
