//																Задача 13(1)
// const myArr = [1, true, '99', 745, undefined, 33, 53];

// function arithmeticMean (value) {
// 	let number = 0;
// 	let sum = 0;

// 	for(let i = 0; i < value.length; i++) {
// 		if(Number.isInteger(value[i])) {
// 			number += 1;
// 			sum += value[i];
// 		}
// 	}
// 	const result = sum / number;
// 	return result
// }
// const answer = arithmeticMean(myArr);
// console.log(answer);

//																Задача 13(2)

// const x = prompt('Введите первое число');
// const y = prompt('Введите второе число');
// const znak = prompt('Введите любой знак "+, -, *, /, %, ^"');

// function doMath (x, znak, y) {
// 	 if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'ошибка';
// 	 return eval(x + znak.replace('^', '**') + y)
// }

// alert(doMath(x, znak, y));

//																Задача 13(3)

// const mainArray = prompt('Введите длину главного массива');
// const internalArray = prompt('Введите длину внутренних массивов');

// const array = new Array(+mainArray).fill(0).map((_, ind) => 
// new Array(+internalArray).fill(0).map((_, i) => prompt(`Введите элемент ${i} в подмассиве ${ind}`)));
// alert('Ваш массив:' + array.map(subArr => '\n' + subArr));


//																Задача 13(4)
// const string = prompt('Введите текст');
// const element = prompt('Какие буквы удалить?');

// function deleteElement (stringArr, elemArr) {
// 	const str = stringArr.split('');
// 	const elem = elemArr.split('');
	
// 	for (let i = 0; i < str.length; i++) {
// 		for (let p = 0; p < elem.length; p++) {
// 			if (str.includes(elem[p])) {
// 				if (str[i] == elem[p]) {
// 					str.splice(i, 1)
// 				}
// 			}
// 		}
// 	}
// 	return str.join('');
// }

// const result = deleteElement(string, element);
// console.log(result);