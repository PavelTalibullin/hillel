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


													//   ООП

// class DanceHall { // Имя класса с заглавной буквы
// 	width; // свойства
// 	height;

// 	constructor(w, h) { // Обязательный метод. БЛОК ИНСТРУКЦИЙ. Выз-ся при создании объекта. В него можно присваивать значения
// 		this.width = w;
// 		this.height = h;
// 	}

// 	calcArea() { // метод, с помощью которого считаем площадь танцевального хола
// 		return this.width * this.height; //this в данном случае, это объект, у которого будет вызван этот метод
// 	}

// 	calcPerimetr() {
// 		return (this.height + this.width) * 2; // Каждый класс может включать в себя столько свойств и методов, сколько потребуется.
// 		// Но отличная практика: делать классы под конкретные задачи
// 	}
// }

// const rect = new Dance (5, 10); // 5 - w, 10 - h. С пом-ю оператора new мы можем создать объект. Объект, отдельный экзамепляр какого либо класса
// // Передаем сюда аргументы. Высоту и ширину
// const rect2 = new Dance (55, 1);
// const rect3 = new Dance (54, 66);
// const rect4 = new Dance (52, 4); // Из любого класса мы можем создать столько объектов сколько нам потребуется

// rect.calcArea()//У созданного объекта можно вызвать метод который вернет нам площадь объекта, у которого мы вызвали этот метод


//															Пример с private and public

// class DanceHall { 
// 	_width; // Нижнее подчеркивание _ - это некторое соглашение что свойство приватное
// 	_height; // чаще всего, все свойста делают приватными, за редким исключением

// 	constructor(w, h) { // Обязательный метод. БЛОК ИНСТРУКЦИЙ. Выз-ся при создании объекта. В него можно присваивать значения
// 		this._width = w;
// 		this._height = h;
// 	}

// 	get width() { 					// Геттер: В данном случае, вызывая этот get, мы вернем ширину этого объекта
// 		return this._width;
// 	} 			// Если явно не укзавать модификатор доступа, то по умолчанию устанавливается 'public'.
// 				// Но лучше писать явно

// 	set width(value) { // Сеттер: Можно либо присвоить новое значение, либо сделать какие-то дополнительные действия
// 		if (value <= 0) {
// 			this._width = 1;
// 		} else {
// 			this._width = value;
// 		} 					//например как в данном случае, ширина прямоуголника не может быть отрицательной

// 	}

// 	calcArea() { // метод, с помощью которого считаем площадь танцевального хола
// 		return this._width * this._height; //this в данном случае, это объект, у которого будет вызван этот метод
		
// 	}

// 	calcPerimetr() {
// 		return (this._height + this._width) * 2; // Каждый класс может включать в себя столько свойств и методов, сколько потребуется.
// 		// Но отличная практика: делать классы под конкретные задачи
// 	}
// }


// const rect = new Dance (5, 10);
// rect.width = -2;
// console.log(rect)




// class User {	
// 	private _username; 	// Так свойства являются приватными, нам нужно создать геттеры и сеттеры, чтобы мы могли управлять этими свойствами от куда-то извне
// 	private _password;
// 	private _id;

// 	constructor(username, password) {
// 		this._username = username;
// 		this._password = password;
// 		this._id = generateRandomId();
// 	}

// 	get username() {			// Тут мы показывем что имя может изменяться
// 		return this._username;
// 	}

// 	set username(value) {
// 		this._username = value;
// 	}
// 	get password() {			// Пароль тоже модет меняться. поэтому есть и сеттер и геттер
// 		return this._password;
// 	}
 
// 	set password(value) {
// 		this._password = value;
// 	}

// 	get id(value) {			// Так ID всегда статичный, и изменяться он не будет, то сеттер мы ему не создаем
// 		this._id= value;
// 	}
// }




// class Person {
// 	private _firstName;
// 	private _lastName;
// 	private _age;

// 	constructor(firstName, lastName, age) {
// 		this._firstName = firstName;
// 		this._lastName = lastName;
// 		this._age = age;
// 	}

// 	get firstName() {
// 		return this._firstName;
// 	}

// 	set firstName(value) {
// 		this._firstName = value;
// 	}
// 	get lastName() {
// 		return this._lastName;
// 	}

// 	set lastName(value) {
// 		this._lastName = value;
// 	}

// 	get age() {
// 		return this._age;
// 	}

// 	set age(value) {
// 		if(value < 0) {
// 			this._age = 0;
// 		} else {
// 			this._age = value
// 		}
// 	}
// }

// class Employee extends Person {

// }

// const employee1 = new Employee("qwert", 'TV', 15);
// console,log(employee1);


class Person {
	private _firstName;
	private _lastname;
	private _age;

	constructor(firstName, lastname, age) {
		this._firstName = firstName;
		this._lastname = lastname;
		this._age = age;
	}

	public greeting() { //Метод просто будет выводить в консоль, привет я человек
		console.log(`Привет, я человек и меня зовут ${this._firstName}`);
	}

	public get fullName() {
		return `Фамилия - ${this._lastname} Имя - ${this._firstName}`;
}
}

class Developer extends Employee {
	
}