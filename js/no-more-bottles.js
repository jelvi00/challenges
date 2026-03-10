

const noMoreBottles = (n) => {

    while (n > -1) {
        console.log((n || 'No more') + ' bottles');
        n--;
    }

}

function make() {
    noMoreBottles(99);
}

make();
