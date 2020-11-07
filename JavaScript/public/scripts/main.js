// Типы данных
let varNumb = 12; // Число
let varString = "Строка Hello world!"; // Строка
console.log(varNumb);
console.log(varString);

let a = String(1);
let b = Number("2");
console.log(a + b);

let n = null;
console.log(n);

let defined = undefined;
console.log(defined);

// Массивы
let array = Array(1,2,3,4,5);
console.log(array);

let object = {
	num: 1,
	str: "2",
	massive: array
}
console.log(object);

array = Array(object, array, 1,2,3,4,5);
console.log(array);

// Логические услувия
let aa = 1, bb = 2;

if (aa < bb) {
	console.log("a < b");
}

else if (aa > bb) {
	console.log("a > b");
}

else {
	console.log("a = b");
}

// Циклы
for (let i = 0; i < 10; i++) {
	console.log("i = " + String(i));
}

// Функции
function plusOne(a) {
	return Number(a) + 1;
}
let c = plusOne(aa);
console.log(c);