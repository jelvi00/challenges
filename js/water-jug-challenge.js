
const waterJugChallenge = (jugXSize, jugYSize, expected) => {

	let baseBucket, finalBucket, fillCount;

	let jugsSizes = [jugXSize, jugYSize], 
		jugNames = ['jugX', 'jugY']
		jugs = {jugX: 0, jugY: 0};

	if (
		jugsSizes.some((e) => e <= expected)
		&& jugsSizes.some((e) => e >= expected)
		&& jugsSizes.some((e) => !(expected % e))

		) {

		baseBucket = !(expected % jugXSize) ? 0 : 1;
		finalBucket = +!baseBucket;
		fillCount = expected / jugsSizes[baseBucket];

		while(fillCount > 0) {

			console.log('Fill ' + jugNames[baseBucket]);
			jugs[jugNames[baseBucket]] = jugsSizes[baseBucket];
			console.log(jugs)

			if (jugs[jugNames[baseBucket]] !== expected) {

				console.log(`Transfer ${jugNames[baseBucket]} to ${jugNames[finalBucket]}`)
			jugs[jugNames[finalBucket]] += jugs[jugNames[baseBucket]];
			jugs[jugNames[baseBucket]] = 0;
			console.log(jugs, '\n')

			}

			

			fillCount--;

		}


	} else {

		console.log('No solution');

	}
	

}

waterJugChallenge(4, 4, 6)