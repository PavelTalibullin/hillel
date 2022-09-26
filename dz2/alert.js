// 									ЗАДАЧА 1(МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ)

/*
let oneNumber = +prompt('Первое число', '');
let twoNumber = +prompt('Второе число', '');
let add = oneNumber + twoNumber;
let mult = oneNumber * twoNumber;
let div = oneNumber / twoNumber;
let sub = oneNumber - twoNumber;
alert(`${add}
${mult}
${div}
${sub}`);
*/


// 									ЗАДАЧА 2(КАЛЬКУЛЯТОР)

/*
let yourChoice = prompt('Что вы хотите сделать? Введите одно из: (add, sub, mult, div)');
let oneNumber = +prompt('Введите первое число:');
let twoNumber = +prompt('Введите второе число:');

let add = oneNumber + twoNumber;
let sub = oneNumber - twoNumber;
let mult = oneNumber * twoNumber;
let div = oneNumber / twoNumber;

if (yourChoice == "add") {
	alert(`${oneNumber} + ${twoNumber} = ${add}`);
	}else if (yourChoice == "sub") {
		alert(`${oneNumber} - ${twoNumber} = ${sub}`);
	}else if (yourChoice == "mult") {
		alert(`${oneNumber} * ${twoNumber} = ${mult}`);
	}else if (yourChoice == "div") {
		alert(`${oneNumber} / ${twoNumber} = ${div}`);
	} else {
		alert("Неправильно введено значение! Ввернитесь к первому вопросу");
}
*/


//										ЗАДАЧА 3(ЧАСЫ В СЕКУНДЫ)

/*
let hour = +prompt('Укажите нужное количество часов:');
let secInHour = 3600;
let answer = hour * secInHour;
alert(`${hour} * ${secInHour} = ${answer}`);
*/

//										ЗАДАЧА 4(СРЕДНЕЕ ЗНАЧЕНИЕ)


let oneNumber = +prompt('Введите первое число');
let twoNumber = +prompt('Введите второе число');
let threeNumber = +prompt('Введите третье число');

let medium = (oneNumber + threeNumber + threeNumber) / 3;

alert(medium);