"use strict";
// ============== 1 ====================================
// объяви три переменные с именами var1, var2 и var3 соответственно
// присвой им значения: 1, 0, true
// выведи в консоль результаты сравнения:
// var1 > var2
// var1 == var3
// var1 === var3
// var1 != var3
// var2 != var3
// var1 > var2 == var3
// var1 > var2 > var3
// напиши в комментарии после команды console.log, ответ из консоли
// объясни почему получаются такие ответы
let var1 = 1;
let var2 = 0;
let var3 = true;

console.log(var1 > var2); // true
console.log(var1 == var3); // true
console.log(var1 === var3); // false
console.log(var1 != var3); // false
console.log(var2 != var3); // true
console.log(var1 > var2 == var3); // true
console.log(var1 > var2 > var3); // false

// ============== 2 ====================================

// объяви переменную val

let val;

// выведи ее в консоль

console.log(val); // undefined

// присваивай ей следующие значения: "River", "Mountain", 232, true, null,
// проверь на число каждое присвоенное значение и узнай тип данных, укажи результат в комментарий после сonsole.log

val = "River";
console.log(typeof val); // string
console.log(isNaN(val)); // true

val = "Mountain";
console.log(typeof val); // string
console.log(isNaN(val)); // true

val = 232;
console.log(typeof val); // number
console.log(isNaN(val)); // false

val = true;
console.log(typeof val); // boolean
console.log(isNaN(val)); // false

val = null;
console.log(typeof val); // object
console.log(isNaN(val)); // false

// ============== 3 ====================================

// объяви две переменные alfa и beta со значениями 0.2 и 0.4

let alfa; // это обЪявление переменной
alfa = 0.2; // это инициализация переменной
const beta = 0.4; // обЪявление + инициализация переменной

// запиши результат суммы этих переменных так, чтобы получилось 0.6 в переменную result

let result = (alfa * 10 + beta * 10) / 10;

// выведи результат в консоль

console.log(result);

// ============== 4 ====================================

// объяви переменную tetra

let tetra;

// присвой ей значения: 12px, 13.34em,

tetra = "12px";
console.log(tetra);
tetra = "13.34em";
console.log(tetra);

// выведи результат в консоль и укажи результат в комментарий после console.log

// ============== 5 ====================================

// выведи в консоль наибольшее и наименьшее число из указанных (2, 34, 99, 3, 22, 36, 733, 18)

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18)); // 733
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18)); // 2

// ============== 6* ===================================

// объяви переменную random

let random;

// пусть она принимает рандомное целое число от 3 до 19 включительно

random = (Math.random() * (19 - 3) + 3).toFixed(0);

// выведи результат в консоль
console.log(random);