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
    const threshold = arr.length / 2;

    for (const vote of arr) {

        if (votes[vote]) votes[vote]++
        else votes[vote] = 1;

        if (votes[vote] > threshold) return vote;

    }

    return null;

}

function make() {

    const winner = ownMajorityElement([2, 1, 1, 2, 2]);

    console.log(winner);
}


make();
