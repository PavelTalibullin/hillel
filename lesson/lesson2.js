// let test = 'eew';
// let test2 = 'eeerf';

// console.log(`${test}${test}`);

// const multiple = 5;

// function isEven (numb) {
// 	return numb+multiple
// }

// console.log(isEven(2));

// let message = 'dudfbfhj';
// message = 67383;

// let number = 5;
// number = 3.4;

// console.log(number);

// СПЕЦИАЛЬНЫЕ ЧИСЛОВЫЕ ЗНАЧЕНИЯ Infinity, -Infinity, NaN
// Infinity - математическая бесконечность. Особое значение, которое больше любого числа

// alert(1/0) // = infinity
// alert( infinity )

// alert('hdkj' / 2); // NaN = вычислительная ошибка. + любая математическая оперция с NaN возвращает NaN
// alert(NaN + 1); 
// alert(3 * 3);
// alert('fefi' / 3*4);
// Если где то в выражении получится NaN, то оно распространится на весь результат.
// ОДНО ИСКЛЮЧЕНИЕ: NaN ** 0 равно 1

// alert(856749875763849018091746487562389418n)

// let string = 'hfjhfhdsfew';
// let string2 = "jdfksfkffheh";
// let stringPhrase = `fhfh ffw fewieji ${123786}`
// console.log(string, string2, stringPhrase);

// alert(`sjkkjd ${23748 + 8783} hefkhdskj`)
// let name = 'pavel';
// alert(`Hi ${name}`);

// boolean может принимать только true(да, правильно) и false(Нет, не правильно)

// let qwerty = 4 < 1;
// alert(qwerty);

// NULL - Представляет собой ничего. Пусто. Значение не известно. И не является ссылкой на несуществующий объект

// let age = null;

// UNDEFINED - значение не было присвоено

// let age;
// alert(age);

// В OBJECT хранятся коллекции данных или более сложные структуры
// В SYMBOL исп. для создания уникальных id

// TYPEOF возвращает тип аргумента.
// 1. Синтаксис оператора: typeof x
// 2. Синтаксис функции: typeof (x).



//         NUMBER       для любых чисел: целочисленные значения ограничены диапазоном ±(253-1).
//         BIGINT       для целых чисел произвольной длины.
//         STRING       для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
//         BOOLEAN      для true/false.
//         NULL         для неизвестных значений – отдельный тип, имеющий одно значение null.
//         UNDEFINED    для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
//         OBJECT (особенный)     для более сложных структур данных.
//         SYMBOL       для уникальных идентификаторов.
//         TYPEOF       Имеет две формы: typeof x или typeof(x).
//                      Возвращает строку с именем типа. Например, "string".
//                      Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.



// let age = 4 + 5 + '4';

// alert(9 ** (1/6));

// function showMessage() {
// 	let message = "Привет, я JavaScript!"; // локальная переменная
 
// 	alert( message );
//  }
 
//  showMessage(); // Привет, я JavaScript!
 
//  alert( message )

// let userName = 'Вася';

// function showMessage() {
//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// showMessage(); // Привет, Вася


// let userName = 'Вася';

// function showMessage() {
// 	let userName = "Петя"; // объявляем локальную переменную
 
// 	let message = 'Привет, ' + userName; // Петя
// 	alert(message);
//  }
 
//  // функция создаст и будет использовать свою собственную локальную переменную userName
//  showMessage();
 
//  alert( userName );

// function showMessage(from, text) {

// 	from = '*' + from + '*'; // немного украсим "from"
 
// 	alert( from + ': ' + text );
//  }
 
//  let from = "Аня";
 
//  showMessage(from, "Привет"); // *Аня*: Привет
 
//  // значение "from" осталось прежним, функция изменила значение локальной переменной
//  alert( from );


// function showMessage (from, text = "текст не добавлен") {
// 	console.log(from + ' ' + text);
// }

// showMessage('Привет')


// function checkAge(age) {
// 	return (age > 18) ? true : confirm('Родители разрешили?');
//  }

//  function checkAge(age) {
// 	return age = (age > 18) || confirm 'Родители разрешили?';
//  }

// function min(a, b) {
// 	if (a < b) {
// 		return a;
// 	}
// 		return b; 
// }

//  min(2, 5);
// min(3, -1);
// min(1, 1);

// const objectA = {
// 	a: 10,
// 	b: true
// }

// const copyOfA = objectA;

// copyOfA.a = 20;
// copyOfA.c = 'abc'
// copyOfA.n = 'виталя'
// copyOfA.g = 2+4;
// copyOfA.c = 30;
// copyOfA.b = false; // Доступ к свойству того или иного объекта, возможен с помощью оператора '.' точка
// console.log(objectA);


// const a = () => {
// 	console.log('Hey world');
// }

// a();

// a = 10;

// a();


// const city = {
// 	usa: 'New York',
// 	ukrain: 'Kiev',
// 	gorgia: 'Tbilisi'
// }

// city.kanada = 'Ottava';

// city['Kazakhstan'] = 'Astana';

// const france = 'pariz';
// city[france] = 'country';

// city.usa = 'los angeles';
// delete city.gorgia;

// delete city['usa'];
// delete city[france]
// console.log(city);


// const dance = {
// 	samba: 1,
// 	chacha: 2,
// 	rumba: 3,
// 	standart: {
// 		slowWals: 1,
// 		tango: 2,
// 		foxtrot: 3
// 	}
// }

// console.log(dance.standart.foxtrot);

// dance.standart.step = 4;
// console.log(dance.standart)
// console.log(dance)



// const car = {
// 	audi: 'A7', //ключ: значение,
// 	bmv: 'x5',  //ключ: значение, и т.д
// 	porshe: '1i7',
// 	info: {
// 		mersedes: '3',
// 		kia: 'rio',
// 	}
// }

// car.matiz = 'small';
// car.info.toyota = 'camry';

// const marka = 'doge';
// car.info[marka] = 'q5';

// car['shevrole'] = 'camaro';

// delete car.porshe;
// delete car.info.mersedes;
// delete car.matiz;

// car.porshe = 911;
// console.log(car);


//											МАССИВЫ
// const myArray = [1, 2, 3]; // вариант с квадратными скобками
// console.log(myArray);

// const myArray2 = new Array(1,2,3); // Новый эксемпляр класса Array.
// console.log(myArray2);//Скобками вызываем функцию Array. Передаем в нее аргументы
  
// console.log(myArray == myArray2); //false(разные ссылки)


// const myArray = [1, true, 'Bogdan'];
// console.log(myArray);

// const myArray2 = [1, true, 'Bogdan'];
// console.log(myArray2);

// console.log(myArray === myArray2);

// const myArray3 = myArray;
// console.log(myArray3 === myArray2)

// const object = {
// 	0: 1,
// 	1: 2,
// 	2: 3
// }
// console.log(object);

// const array = [1, 2, 3];
// console.log(array);


// const family = [1, false, 'abc']
// console.log(family);

// console.log(family[2]);

// family[0] = 'Pasha';
// family[3] = 'Sasha';
// console.log(family);


// const water = {
// 	pepsi: 20,
// 	fanta: 25,
// 	merinda: 30,
// 	tea: {
// 		black: true,
// 		green: false,
// 		fruit: 'good'
// 	}
// }
// water.pepsi = 100;
// delete water.merinda

// const coffee = 'black';
// water[coffee] = 'white';

// water.tea['fruit'] = 'chacha';

// console.log(water);



// const country = ['USA', 'Spain', 'Italy', 'Ukraine']

// country[0] = 'Canada'
// const delEnd = country.pop();
// country.push('USA');
// const delStart = country.shift();
// country.unshift('Bali');

// console.log(country);
// console.log(delEnd);
// console.log(delStart);
// console.log(country[3]);


// let a = 5;
// let b = 100;

// let c;

// c = a + b;
// console.log(c);


// a = 3;
// b = 7;

// c = a + b;
// console.log(c);

// const dance = {
// 	samba: 2,
// 	chacha: function() {
// 		console.log('wals');
// 	}
// }

// dance.chacha();

// let name1 = 'Pasha';
// let name2 = 'Masha';

// const dance = {
// 	name1,
// 	name2,
// 	three: function(a, b) {
// 		let c = a * b;
// 		return c
// 	}
// }
// const dance2 = Object.assign({}, dance);
// dance2.name1 = 'kukushka';

// console.log(dance);
// console.log(dance2);


// let name1 = 'Pasha';
// let name2 = 'Masha';

// const dance = {
// 	name1,
// 	name2,
// 	three: function(a, b) {
// 		let c = a * b;
// 		return c
// 	}
// }
// const dance2 = {...dance};
// dance2.name1 = 'kukushka';

// console.log(dance);
// console.log(dance2);
// console.log(dance.three(4, 4));
// console.log(dance2.three(4, 4));


// let name1 = 'Pasha';
// let name2 = 'Masha';

// const dance = {
// 	name1,
// 	name2,
// 	three: function(a, b) {
// 		let c = a * b;
// 		return c
// 	}
// }
// const dance2 = JSON.parse(JSON.stringify(dance));
// dance2.name1 = 'kukushka';

// console.log(dance);
// console.log(dance2);
// console.log(dance.three(4, 4));


const mama = [1, true, false, 4, 5, 'Привет'];
const papa = new Array(1,2,3,4,5,6);

mama.unshift('tratata')

papa.push('ай лове ю')
console.log(mama.pop())
console.log(mama);
console.log(papa);
