// Frequência em Hertz de uma oitava | 30/05/2023

function print () {
    var notaOitava = Number(prompt("Digite a frequência da nota da oitava"));
    var lista = [];

    function oitava (i) {
        lista.push(
            `${i} Hz`,
            `${i * Math.pow(2, (2 / 12))} Hz`,
            `${i * Math.pow(2, (4 / 12))} Hz`,
            `${i * Math.pow(2, (5 / 12))} Hz`,
            `${i * Math.pow(2, (7 / 12))} Hz`,
            `${i * Math.pow(2, (9 / 12))} Hz`,
            `${i * Math.pow(2, (11 / 12))} Hz`,
            `${i * Math.pow(2, (12 / 12))} Hz`
        );

        lista.forEach(element => console.log(element));
    }

    oitava (notaOitava);
}

print ();