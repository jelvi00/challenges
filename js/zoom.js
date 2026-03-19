//This week's question:
// You have a 2D grid of numbers.
// Write a function that zooms in by an integer factor k >= 2 by turning each cell into a k x k block
// with the same value, returning the bigger grid.
//
// Examples:

// zoom([
// [ 1, 2 ],
// [ 3, 4 ]
// ], 2)
// [
//     [ 1, 1, 2, 2 ],
//     [ 1, 1, 2, 2 ],
//     [ 3, 3, 4, 4 ],
//     [ 3, 3, 4, 4 ]
// ]
//zoom([
// [ 7, 8, 9 ]
// ], 3)
// [
//   [ 7, 7, 7, 8, 8, 8, 9, 9, 9 ],
//   [ 7, 7, 7, 8, 8, 8, 9, 9, 9 ],
//   [ 7, 7, 7, 8, 8, 8, 9, 9, 9 ]
// ]
//zoom ([[1], [2]], 3)
// [
//     [ 1, 1, 1 ],
//     [ 1, 1, 1 ],
//     [ 1, 1, 1 ],
//     [ 2, 2, 2 ],
//     [ 2, 2, 2 ],
//     [ 2, 2, 2 ]
// ]

const zoom = (grid, k) => {

    if(!grid?.length || !grid.every(Array.isArray)) return;

    if (k < 2) return grid;

    const zoomed = [];

    for (let li = 0; li < grid.length; li++) {

        const line = grid[li];

        const lineZoom = Array.from({ length: k },  () => []);

        for (let ci = 0; ci < line.length; ci++) {

            const bi = k * ci;

            for (let hi = 0; hi < k; hi++) {

                for (let wi = 0; wi < k; wi++) {

                    lineZoom[hi][bi + wi] = line[ci];

                }

            }
        }

        zoomed.push(...lineZoom);

    }

    return zoomed;

}

function make() {
    console.log(zoom([[1], [2]], 3));
}

make();
