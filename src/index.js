const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
//10 stands for dot(.), 11 stands for dash(-).

function decode(expr) {
    //let numHaracter = expr.length / 10;
    let haracter = '';
    let morze = '';
    let result = '';
    for (i = 0; i < expr.length; i++) {
        if ((i + 1) % 10 !== 0) haracter = haracter + expr[i];//пока не 10 символов,записываем
        else //10й символ
        {
            haracter = haracter + expr[i];
            if (haracter.indexOf("*") !== -1) result = result + " ";
            else {
                let simvol = '';//последовательность из 2х 1 и 0
                for (j = 0; j < haracter.length; j++) {
                    if ((j + 1) % 2 !== 0) simvol = simvol + haracter[j];//пока не 2 символa,записываем
                    else {
                        simvol = simvol + haracter[j];
                        if (simvol === "10") morze = morze + '.';
                        else if (simvol === "11") morze = morze + '-';
                        simvol = '';
                    }
                }
                result = result + MORSE_TABLE[morze];

            }
            haracter = '';
            morze = '';
        }
    }
    console.log(result);
    return result;
}

module.exports = {
    decode
}