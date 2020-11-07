let a = 1, b = 2;

console.log(plus(a,b));
console.log(minus(a,b));
console.log(umn(a,b));
console.log(del(a,b));

function plus(a,b) {
	return Number(a) + Number(b);
}

function minus(a,b) {
	return Number(a) - Number(b);
}

function umn(a,b) {
	return Number(a) * Number(b);
}

function del(a,b) {
	return Number(a) / Number(b);
}