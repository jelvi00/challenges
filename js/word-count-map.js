
const text = 'Nuevas ofertas. Diario. Puedes pedir "Alexa, ¿cuáles son mis ofertas?" en cualquier dispositivo de nuestra familia Echo.'

const normalize = (word) => word.toLowerCase().replace(/[\W_]+/g, '');

const wordCountMap = (text) => {

    const dict = {};

    const separatedWords = text.split(' ');

    for (const word of separatedWords) {

        const normalized = normalize(word);

        normalized in dict ? (++dict[normalized]) : (dict[normalized] = 1);

    }

    return dict;

}

function make() {

    console.log(wordCountMap(text));

}

make();
