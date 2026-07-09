// Given a queue of customer names and an integer n,
// move every nth customer to the end of the line while preserving relative order otherwise.
//
// Example:
//
// shuffleNames(["Ada", "Ben", "Cam", "Diya", "Eli", "Fay"], 3);
// > ['Ada', 'Ben', 'Diya', 'Eli', 'Cam', 'Fay']
// Every 3rd customer is moved to the end, so "Cam" and "Fay"
// are moved after the others, preserving their original order.
//
// shuffleNames(["A", "B", "C", "D", "E"], 2);
// > ['A', 'C', 'E', 'B', 'D']
//
// shuffleNames(["Mo", "Noah", "Oli"], 1);
// > ['Mo', 'Noah', 'Oli']


const shuffleNames = (names, n) => {

    if (!names.length) return;

    if (names.length < n) return;

    const indexes = [];

    for (let i = (n - 1); true; i = i + n) {

        if (i > names.length - 1) break;
        else indexes.push(i);

    }

    const slicedNames = [];

    for (let i = indexes.length - 1; i >= 0; i--) {

        slicedNames.unshift(names.splice(indexes[i], 1))

    }

    return names.concat(slicedNames.flat());

}

function make() {

    console.log(shuffleNames(["Ada", "Ben", "Cam", "Diya", "Eli", "Fay"], 3));
}

make();
