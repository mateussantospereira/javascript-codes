// Juros sobre juros de investimento por mês | 15/06/2023

let capitalMonth = Number(prompt("Digite o capital por mês:"));
let interestRate = Number(prompt("Digite a taxa de juros em porcentagem:")) / 100;
let time = Number(prompt("Digite a quantidade de meses:"));

let values = [capitalMonth, interestRate, time];

var premise = 0;
var amount = 0;
var accountant = 0;

function print() {
    function calculate() {
        while(accountant < time) {
            amount = amount + capitalMonth;
            amount = amount + amount * interestRate;
        
            accountant++;
        }

        if(time == 1) {
            console.log(`O montante depois de um mês será ${amount}.`)
        } else {
            console.log(`O montante depois de ${time} meses será ${amount}.`);
        }
    }
    
    for(let value of values) {
        
        if(value > 0) {
            premise++;
        }
    }

    if(premise == 3) {
        calculate();
    } else {
        console.error(`Não é aceita a digitação de letras ou de caixas vazias. Digite apenas números positivos diferentes de zero.`);
    }
}

print();