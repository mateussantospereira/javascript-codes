// navegador ctrl shift i
// roubo nas eleições 2022
// 03/02/2023

var pl = 0;
var pt = 0;
var anulado = 0;
var contador = 0;
var votoroubado = 0;
var eleitores = Number( prompt ( "Digite a quantidade de eleitores" ));

function pessoalvoto () {
    var voto = prompt ( "Digite o número do candidato a ser votado" );
    if ( voto == "22" ) {
        pl++;
    } else if ( voto == "13" ) {
        pt++;
    } else {
        anulado++;
    }
}

while ( contador < eleitores ) {
    pessoalvoto ();
    contador++;
}

while ( pl > ( ( pl + pt + votoroubado ) / 2 ) - 1 ) {
    pl--;
    votoroubado++;
}

console.log ( "Bolsonaro:", pl, ", Ladrão:", pt + votoroubado, "e Anulados:", anulado );

