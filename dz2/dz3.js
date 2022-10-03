// 									УПРАЖНЕНИЕ 6

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// switch (true) {
// 	case numOrStr === null:
// 		console.log('вы отменили');
// 		break;
// 	case numOrStr.trim() === '':
// 		console.log('Empty String');
// 		break;
// 	case isNaN( +numOrStr ):
// 		console.log('number is Ba_NaN');
// 		break;
// 	default:
// 	console.log('OK!')
// }


// 									УПРАЖНЕНИЕ 7. ЦИКЛЫ

// - Вывести на страницу в одну строку через запятую числа от 10 до 20
// let a = '';
// let i = 10;
// for (; i <= 19; i++) {
// a += `${i},`;
// }
// console.log(a + i);


// - Вывести квадраты чисел от 10 до 20
// for (let i = 10; i <= 20; i++) {
// 	console.log(i * i);
// }


// - Вывести таблицу умножения на 7
// for (let i = 7, a = 0; a <= 10; a++) {
// 	console.log(`${i} x ${a} = ${i * a}`)
// }



// - Найти сумму всех целых чисел от 1 до 15
// let i = 1;
// let sum = 0;

// while(i <= 15) {
// 	sum += i;
// 	i++
// }
// console.log(sum);


// - Найти произведение всех целых чисел от 15 до 35
// let g = 1;
// for (let j = 15; j <= 35; j++) {
// 	g *= j;
// }
// console.log(g);


// - Найти среднее арифметическое всех целых чисел от 1 до 500
// for (i = 1; i <= 500; i++) {
// 	i += i;
// }
// console.log(i / 500);


// - Вывести сумму только четных чисел в диапазоне от 30 до 80
// for (let i = 30; i <= 80; i++) {
// 	if (i % 2 === 0); {
// 	console.log(i);
// }
// }

// - Вывести все числа в диапазоне от 100 до 200 кратные 3
// for (let f = 100; f <= 200; f++) {
// 	if (f % 3 == 0) {
// 		console.log(f)
// 	}
// }


// - Дано натуральное число. Найти и вывести на страницу все его делители.
// let number = +prompt('Введите любое натуральное число');

// for (let i = 1; i <= number; i++) {
// 	if (number % i == 0) {
// 		console.log(`Делители числа: ${i}`);
// 	}
// }


// - Определить количество его четных делителей
// let number = +prompt('Введите любое натуральное число');
// let even = 0;
// for (let i = 1; i <= number; i++) {
// 		if (number % i == 0) {
// 			if (i % 2 == 0){
// 				even += 1; 
// 			}
// 		}
// 	}
// console.log(`Четных делителей числа: ${even}`)



// - Найти сумму его четных делителей
// let number = +prompt('Введите любое натуральное число');
// let sumEven = 0;
// for (let i = 1; i <= number; i++) {
// 		if (number % i == 0) {
// 			if (i % 2 == 0){
// 				sumEven += i; 
// 			}
// 		}
// 	}
// console.log(`Сумма четных делителей: ${sumEven}`)



// - Напечатать полную таблицу умножения от 1 до 10 
// for (let q = 1; q <= 10; q++) {
// 	for(w = 1; w <= 10; w++) {
// 		console.log(`${q} x ${w} = ${q * w}`)
// 	}
// }


// 											ЗАДАЧА 8. ЦИКЛЫ ПОСЛОЖНЕЕ

// - Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)
// let str = '';
// let numb1 = 20;

// for (; numb1 < 30; numb1 = numb1 + 0.5) {
// 	str += `${numb1} `;
// }
// console.log(str + numb1);


// -Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов
// let g = 27;
// for (let d = 10; d <= 100; d = d + 10) {
// console.log(g * d);
// }


// -Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N
// let n = prompt('Введите целое число');
// for(let x = 1; x <= 100; x++) {
// 	if(x * x <= n) {
// 		console.log(x);
// 	}
// }


// - Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

// let num = prompt('Введите целое число');

// for(let s = 1; s <= num; s++) {
// 	for (let j = 2; j <= s; j++) {
// 	if(s % j == 0 && j < s) {
// 		break;
// 	}else if (j == s) {
// 		console.log(s);
// 	}
// 	}
// }


// - Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя)

let number = prompt('Введите любое число', ''); //81

for (n = 1; n <= number; n++) {
	if(Math.pow(3, n) == number){
		console.log('Можно');
		break;
	} else if(Math.pow(3, n) >= number) {
		console.log('Нельзя');
		break;
	}
}