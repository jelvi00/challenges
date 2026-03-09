//This week's question:
// Given a string s consisting only of 'a' and 'b', you may swap adjacent characters any number of times.
// Return the minimum number of adjacent swaps needed to transform s into an alternating string, either "ababab..." or "bababa...", or return -1 if it's impossible.
//
// Example:
//
// minSwapsToAlternate('aabb') abab
// 1
//
// minSwapsToAlternate('aaab')
// -1
//
// minSwapsToAlternate('aaaabbbb') aaababbb aabaabbb abaaabbb abaababb ababaabb abababab
// 6


const minNonAdjacentSwapsToAlternate = (s) => {

    if (!s || typeof s !== 'string' || !s.trim()) return -1;

    const sArr = s.split('');
    const aCount = sArr.filter((lett) => lett === 'a').length;
    const bCount = sArr.filter((lett) => lett === 'b').length;

    if (!aCount || !bCount) return -1;
    else if ((aCount + bCount) !== s.length) return -1;
    else {
        const subs = aCount - bCount;
        if ((subs > 0 ? subs : -subs ) > 1) return -1;
    }

    let swaps = 0;


    for (let i = sArr.length; i !== 0; i--) {

        const current = sArr[i];

        if (sArr[i - 1] === current) {
            for (let j = i - 1; j !== 0; j--) {

                const subCurrent = sArr[j];

                if (subCurrent !== current) {
                    const exchange = sArr[i - 1];
                    sArr[i - 1] = subCurrent;
                    sArr[j] = exchange;
                    swaps++
                    break;
                }

            }
        }

    }

    return [ swaps, sArr.join('') ];

}

const minAdjacentSwapsToAlternate = (s) => {

    if (!s || typeof s !== 'string' || !s.trim()) return -1;

    const sArr = s.split('');
    const aCount = sArr.filter((lett) => lett === 'a').length;
    const bCount = sArr.filter((lett) => lett === 'b').length;

    if (!aCount || !bCount) return -1;
    else if ((aCount + bCount) !== s.length) return -1;
    else {
        const subs = aCount - bCount;
        if ((subs > 0 ? subs : -subs ) > 1) return -1;
    }

    let swaps = 0;

    for (let i = 0; i < sArr.length; i++) {

        if (i === sArr.length - 1) break;

        const current = sArr[i];
        const next = sArr[i + 1];
        const nextNext = sArr[i + 2];

        if (current !== next && next === nextNext) {
            sArr[i] = next;
            sArr[i + 1] = current
            swaps++
            i = 0;
        }

    }

    return [swaps, sArr.join('')];

}

function make() {
    const result = minAdjacentSwapsToAlternate('aaaabbbb');
    console.log(result)
}

make();
