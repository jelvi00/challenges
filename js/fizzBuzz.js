const fizzBuzz = (n) => {

    for (let i = 1; i <= n; i++) {

        console.log(
            ((i % 3) ? '' : 'Fizz') +
            ((i % 5) ? '' : 'Buzz') +
            ((i % 3) && (i % 5) ? i : '')
        )

    }

}

function make() {

    fizzBuzz(15);

}

make()
