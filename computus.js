// Computus de Dionysius Exiguus | 31/08/2023

function computus() {
    let year = Number(prompt(`ano`));
    let month = (year + 1) % 19;
    let epact = ((year % 19) * 11) % 30;
    let concurrent = (year + (year / 4 - (year / 4 % 1)) + 4) % 7;
    let paschalMoon = 0;
    let moonDay = 0;

    let monthMoon;
    let monthPaschal;

    let paschalDay = moonDay;
    let accountant = 0;

    function calculate() {
        if (month == 2 || month == 5 || month == 7 || month == 10 || month == 13 || month == 16 || month == 18) {
            monthMoon = `Março`;
        } else {
            monthMoon = `Abril`;
        }
    
        if (monthMoon == `Março`) {
            moonDay = 36 - epact;
    
            if (moonDay > 30) {
                moonDay = moonDay - 30;
            }
    
            paschalMoon = (moonDay + concurrent + 4) % 7;
        } else {
            moonDay = 35 - epact;
    
            if (moonDay > 30) {
                moonDay = moonDay - 30;
            }
    
            paschalMoon = (moonDay + concurrent + 7) % 7;
        }
    
        paschalDay = moonDay;
    
        if (paschalMoon == 0) {
            paschalDay++;
        } else {
            while (accountant < 8 - paschalMoon) {
                paschalDay++
                accountant++;
            }
        }
    
        if (paschalDay > 31) {
            monthPaschal = `Abril`;
    
            paschalDay = paschalDay - 31;
        } else {
            monthPaschal = monthMoon;
        }
    }

    let minimo = 33;
    let maximo = 1583;

    if (year > minimo && year < maximo) {
        calculate();

        console.log(`A lua pascal em ${year} cai no dia ${moonDay} de ${monthMoon}.`);
        console.log(`O domingo de Páscoa em ${year} cai no dia ${paschalDay} de ${monthPaschal}`);
        console.log(`A epacta é ${epact}; O concurrent é ${concurrent}`);
    } else {
        console.error(`Digite um ano maior que ${minimo} e menor que ${maximo}`);
    }
}

computus();