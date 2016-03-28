var number = prompt("Введите число",""); 
var power = prompt("Введите степень",""); 
function pow(number, power) {
	if (power <= 0) return 1;
	if (power >= 1) return pow(number, power - 1) * number;
}
var result = pow(number, power);
console.log("Число в степени=", +result);