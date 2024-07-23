// Calendário | Mateus dos Santos Pereira | 02/08/2023 | Atualizado: 24/04/2024

let ate = Number(prompt(`Digite o ano do calendário.`));
let min = 1;
let max = 3001;
let text;

function calculate(ate) {
    let nextDay = 6;
    let month = [
    { name: `Janeiro`, days: 31 },
    { name: `Fevereiro`, days: 28 },
    { name: `Março`, days: 31 },
    { name: `Abril`, days: 30 },
    { name: `Maio`, days: 31 },
    { name: `Junho`, days: 30 },
    { name: `Julho`, days: 31 },
    { name: `Agosto`, days: 31 },
    { name: `Setembro`, days: 30 },
    { name: `Outubro`, days: 31 },
    { name: `Novembro`, days: 30 },
    { name: `Dezembro`, days: 31 }
    ];

     let week = [`Domingo`, `Segunda-Feira`, `Terça-Feira`, `Quarta-Feira`, `Quinta-Feira`, `Sexta-Feira`, `Sábado`];

    let text = ``;
    let content = [];
    
        for (let ano = 1; ano <= ate; ano++) {
            if (ano > 1581) {
                if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
                    month[1].days = 29;
                } else {
                    month[1].days = 28;
                }
            } else {
                if (ano % 4 == 0) {
                    month[1].days = 29;
                } else {
                    month[1].days = 28;
                }
            }

            if (ano == ate) {
                text = text + `----------------------------------------------------<br>`;
                text = text + `Calendário de ${ano}<br>`;
            }

            for (let i of month) {
                day = 1; // Quantidade de dias

                if (ano == ate) {
                    text = text + `----------------------------------------------------<br>`;
                    text = text + `${i.name}<br>`;
                    text = text + `----------------------------------------------------<br>`;
                }

                for (let day = 1; day <= i.days; day++) {
                    if (ano == ate) {
                        text = text + `${week[nextDay]}, dia ${day} de ${i.name} de ${ano}<br>`;
                    }

                    nextDay++;

                    if (nextDay == 7) {
                        nextDay = 0;
                    }

                    if (ano == 1582 && i.name == `Outubro`) { // Outubro de 1582
                        if (day == 4) {
                            day = day + 10;
                        }
                    }
                }
            }
        }

    return text;
}


if (ate < 1 || ate > max) {
    text = `Erro. Digite um ano maior que ${min} e menor que ${max}.`;
} else {
    text = calculate(ate);
}

document.body.innerHTML = ``;
document.write(text);