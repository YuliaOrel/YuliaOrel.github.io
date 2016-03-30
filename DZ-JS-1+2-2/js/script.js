var namesArray = [];
for (var i = 0; i < 5; i++) {
  var usersNames = prompt("Введите имя пользователя:");
	namesArray.push(usersNames);
}

console.log("namesArray ", namesArray);
var myName = prompt("Введите своё имя: ");
console.log("myName ", myName);


if (myName in namesArray){
	alert("Добро пожаловать " + myName + "!");
}
else{
	alert("Попробуйте ещё раз!");
}
