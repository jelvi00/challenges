//Given an integer n, return all unique combinations of Perrin numbers
// (up to and including the nth Perrin number) that sum to a target value k,
// where each Perrin number can be used at most once. Return the combinations sorted in ascending order.

//Example:
//
// > perrinCombinations(7, 12)
// [[0,2,3,7],[0,5,7],[2,3,7],[5,7]]
//
// > perrinCombinations(6, 5)
// [[0,2,3],[0,5],[2,3],[5]]

const doPerrin = (n) => {

    const perrinNumbers = [ 3, 0, 2 ];

    do {

        perrinNumbers.push(
            perrinNumbers[perrinNumbers.length - 2]
            + (perrinNumbers[perrinNumbers.length - 3])
        );

    } while (perrinNumbers[perrinNumbers.length - 1] < n)

    return perrinNumbers;

};

const perrinCombinations = (n, k) => {

    const perrinNumbers = doPerrin(n);

    const combinations = [];

    //Iteración base
    for (let i = perrinNumbers.length - 1; i >= 0; i--) {

        let combination = [ perrinNumbers[i] ];

        //Iteración de posicionamiento
        for (let j = i - 1; j >= 0; j--) {

            let match = false;

            //Iteración de selección
            for (let x = j; x >= 0; x--) {

                const value = perrinNumbers[x];

                if (combination.includes(value)) continue;

                if (value > k) continue;

                const reduction = combination.reduce((p, c) => p + c, value);

                if (reduction > k) continue;

                combination.push(value);

                match = reduction === k;
            }

            if (match) {
                combination.sort((a, b) => a - b);

                if (!combinations.some((comb) => comb.join('') === combination.join(''))) {
                    combinations.push(combination);

                    if (combination.includes(0))
                        combinations.push(combination.filter((n) => n !== 0))
                }

                combination = [ perrinNumbers[i] ];


                match = false;

            }
        }
    }

    return combinations;

};


function make() {

    console.log(perrinCombinations(5, 10));

}


make();



