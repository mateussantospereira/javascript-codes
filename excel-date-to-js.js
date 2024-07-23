// Data do Excel para data do JavaScript | 22/05/2024

function getExcelDateToJS(excelDate) {
    let difference = 25567; // Diferença de dias do Excel para os do JavaScript
    let miliseconds = 24 * 60 * 60 * 1000; // Milisegundos do dia
    let date = new Date((excelDate - difference) * miliseconds);

    return date;
}

getExcelDateToJS(37894)