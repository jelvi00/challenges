//This week's question:
// You're given a 2D grid representing a city where each cell is either empty (0), a fire station (1),
// or a building (2). Fire stations can serve buildings based on horizontal + vertical moves only.
// Return a 2D grid where each cell shows the minimum distance to the nearest fire station.
//
// Examples:
//
// > fireStationCoverage([
//      [2, 0, 1],
//      [0, 2, 0],
//      [1, 0, 2]
// ])
// > [
//      [2, 1, 0],
//      [1, 2, 1],
//      [0, 1, 2]
//   ]
//
// > fireStationCoverage([
//      [1, 0, 0, 1],
//      [0, 0, 0, 0],
//      [0, 0, 0, 0],
//      [1, 0, 0, 1]
// ])
// > [
//      [0, 1, 1, 0],
//      [1, 2, 2, 1],
//      [1, 2, 2, 1],
//      [0, 1, 1, 0]
//   ]


const fireStationCoverage = (city) => {

    if (!city.length || !city.every(Array.isArray)) return null;

    const minDis = Array.from({ length: city.length }).map(() => []);

    const stations = [];

    //Locating stations
    for (let i = (city.length - 1); i >= 0; i--) {

        const street = city[i];

        if (!street.length) continue;

        for (let b = (street.length - 1); b >= 0; b--) {

            if (street[b] === 1) stations.push([ i, b ]);

        }
    }

    if (stations.length) {

        for (let i = (city.length - 1); i >= 0; i--) {

            const street = city[i];

            if (!street.length) continue;

            for (let b = (street.length - 1); b >= 0; b--) {

                if (street[b] === 1) {
                    minDis[i][b] = 0;
                    continue;
                }

                let moves = [];

                for (let s = (stations.length - 1); s >= 0; s--) {

                    const station = stations[s];

                    //Math.abs to ignore negative numbers
                    moves.push(Math.abs(i - station[0]) + Math.abs(b - station[1]));

                }

                minDis[i][b] = moves.reduce((p, c) => p === null ? c : (c > p ? p : c), null);
            }
        }
    }

    return stations.length ? minDis : null;

}

function make() {
    console.log(fireStationCoverage(
        [
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0]
        ]
    ))
}

make();
