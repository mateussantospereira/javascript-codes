// Juros compostos calculadora | 09/06/2023

var capital = Number(prompt("Digite o capital:"));
var jurosTaxa = Number(prompt("Digite a taxa de juros em porcentagem:")) / 100;
var vezes = Number(prompt("Digite o número de vezes:"));
var montante = capital;
var contador = 0;

function calcular() {
    while(contador < vezes) {
        montante = montante + montante * jurosTaxa;
        contador++
    }

    console.log(`O montante é ${montante}`);
}

calcular();