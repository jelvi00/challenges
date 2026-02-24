// Given an array of integers, find the contiguous subarray that has the largest sum and return that sum.
// A subarray must contain at least one element. If all elements are negative, return the largest (least negative) value.
// If you need a hint, look up Kadane's Algorithm!
//
// Examples:
//
// > maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// 6
// > maxSubarraySum([5])
// 5
// > maxSubarraySum([-1, -2, -3, -4])
// -1
// > maxSubarraySum([5, 4, -1, 7, 8])
// 23


// > maxSubarraySum([-1, -2, -3, 6, -1, 7, -5, 10])

const maxSubarraySum = (arr) => {

    if (!arr.length) return 0;

    if (arr.some((e) => typeof e !== 'number')) return null;

    let maxSum;

    arr.reduce((sum, current) => {

        if (typeof sum !== 'number') {
            maxSum = current;
            return current;
        }

        const currentSum = sum + current;

        if (currentSum > maxSum) maxSum = currentSum;
        else if (current > maxSum) maxSum = current;

        if (currentSum > current) return currentSum;
        else return current;


    }, null);

    return maxSum;

}

function make() {

    const sum = maxSubarraySum([-10, -5, -1, -8, -12]);

    console.log(sum);
}


make();
