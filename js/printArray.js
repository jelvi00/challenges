const printArray = (arr) => {

    let length = arr.length, i = 0;

    if (length === 0) console.log('Empty Array');
    else do console.log(arr[i]);
    while (++i < length);

}

function make() {
    printArray([1, 2, 3, 4, 5])
}

make();
