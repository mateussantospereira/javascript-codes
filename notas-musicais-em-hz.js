// Frequência das notas musicais em Hertz | 30/05/2023

function print () {
    var notas = [`Dó`, `Dó#`, `Ré`, `Ré#`, `Mi`, `Fá`, `Fá#`, `Sol`, `Sol#`, `Lá`, `Lá#`, `Si`];
    var lista = [];

    function menores () {
        var notas_men = -53;
        var proxima = 4;
        while(notas_men < 0) {
            if (proxima == 12) {
                proxima = 0;
            }
            var variacao = Math.pow(2, (notas_men / 12));
            var proximaNota = 440 * variacao;
            lista.push(`${notas[proxima]} ${proximaNota}`);
            notas_men++;
            proxima++;
        }
    }

    function maiores () {
        var notas_mai = 0;
        var proxima = 9;
        while(notas_mai < 67) {
            if (proxima == 12) {
                proxima = 0;
            }
            var variacao = Math.pow(2, (notas_mai / 12));
            var proximaNota = 440 * variacao;
            lista.push(`${notas[proxima]} ${proximaNota}`);
            notas_mai++;
            proxima++;
        }
    }
    menores();
    maiores();

    lista.forEach(element => console.log(element));
}

print();