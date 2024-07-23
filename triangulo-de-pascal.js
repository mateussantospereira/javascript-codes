// Triângulo de Pascal
// 09/05/2023

var linha = [];
var n1 = 0;
var p1 = 0;
var max = Number(prompt("Digite a quantidade de linhas"));

function triangulo_pascal () {
    
    while (n1 < max) {
        binomio(n1, p1);
        
        while (p1 < n1) {
            p1++;
            binomio(n1, p1);
            // console.log(n1, p1);
        }
        
        console.log(linha);
        linha = [];
        p1 = 0;
        n1++;
    }
}

function binomio(n, p) {

    var fator = [];

    function fatorial(num) {
        var fat = num;
        var result;

        if (num == 0 || num == 1) {
            result = 1;
        } else {
            while (num >= 2) {
                num--;
                fat = fat * num;
                result = fat;
            }
        }
        fator.push(result);
    }

    fatorial(n);
    fatorial(p);
    fatorial(n - p);

    function binomial() {
        var binomio_result = fator[0] / (fator[1] * fator[2]);
        linha.push(binomio_result);
        // console.log(binomio_result);
    }

    binomial();
}

triangulo_pascal ();