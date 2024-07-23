// Excel hour to JavaScript

let xlsxHour = 0.6489467592592593;
let fractionDay = xlsxHour - Math.floor(xlsxHour) + 0.0000001;
let secondsDay = 86400;
let secondsHour = Math.floor(secondsDay * fractionDay);

let hours = Math.floor(secondsHour / (60 * 60));
let minutes = Math.floor((secondsHour / 60) % 60);
let seconds = Math.floor((secondsHour) % 60);

console.log(hours, minutes, seconds);