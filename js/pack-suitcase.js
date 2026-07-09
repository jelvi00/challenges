//Given an array of object weights and an array of suitcase capacities,
//determine the minimum number of suitcases needed to pack all objects,
//where each object must go into exactly one suitcase
//and each suitcase can hold any number of objects up to its capacity.
//Return -1 if it is impossible to pack all objects.

//Examples:

//packSuitcases([4, 8, 1, 4, 2], [10, 6, 8]);
//> 3

//packSuitcases([9, 7, 6], [10, 6]);
//> -1

const packSuitcases = (weights, capacities) => {

    const baggage = {};

    for (let i = capacities.length - 1; i >= 0; i--) {

        const bag = capacities[i];

        const itemIndex = weights.findIndex((item) => item === bag);

        if (itemIndex > -1) {
            baggage[bag] = [bag]
            weights.splice(itemIndex, 1);
            continue;
        }

        const itemsIndexes = [];

        for (let j = weights.length - 1; j >= 0; j--) {

            const value = weights[j];

            if (value > bag) continue;

            const reduction = itemsIndexes.reduce((p, c) => p + weights[c], value);

            if (reduction > bag) continue;

            itemsIndexes.push(j);

            if (reduction === bag) break;

        }

        if (itemsIndexes.length) {

            const items = [];

            itemsIndexes.forEach((index) => items.push(weights.splice(index, 1)));

            baggage[bag] = items.flat();

        }

    }
    
    return weights.length ? -1 : Object.keys(baggage).length;

}

function make() {

    console.log(packSuitcases([4, 8, 1, 4, 2, 6, 1, 1, 2], [10, 6, 8, 5]));

}

make();
