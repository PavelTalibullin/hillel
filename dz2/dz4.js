//											Задача 9 (Массив)

// let arr = [];
// arr.length = +prompt('Введите длину массива(от 1 до 10)');

// for (let q = 0; q < arr.length; q++) {
// 	arr[q] = prompt(`Введите значение ${q} массива`);
// }
// alert(arr);

// arr.sort();
// function compare (a, b) {
// if (a > b) {
// 	return 1;
// } else if 
// 	(a < b){
// 		return -1;
// 	} else {
// 		return 0;
// 	}
// }

// alert(arr.sort(compare));

// arr.splice(1, 3);
// alert(arr);


//											Задача 10(Поиск в массиве)

														// 1
// const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let sumPositive = 0;
// let quantityPos = 0;


// for (let i = 0; i < myArr.length; i++) {
// 	if (myArr[i] > 0) {
// 		sumPositive += myArr[i];
// 		quantityPos += 1;
// 	}
// }
// console.log(sumPositive + ', ' + quantityPos);


															// 2
// const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let min = Math.min(...myArr);
// let position = myArr.indexOf(min); 
// console.log(min);
// console.log(position);


															// 3
// const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let max = Math.max(...myArr);
// let position = myArr.indexOf(max);
// console.log(max);
// console.log(position);


															// 4
// const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let number = 0;

// for (let i = 0; i <= myArr.length; i++) {
//  if(myArr[i] < 0) {
// 	number += 1;
//  }
// }
// console.log(number);


															// 5
// const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// 	let number = 0;

// 		for(let i = 0; i <= myArr.length; i++) {
// 			if (myArr[i] > 0) {
// 				if (myArr[i] % 2 == 1) {
// 					number += 1;
// 				}
// 			}
// 		}
// 	console.log(number);


															// 6
// const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let number = 0;

// for (let i = 0; i <= myArr.length; i++) {
// 	if (myArr[i] > 0) {
// 		if(myArr[i] % 2 == 0) {
// 			number += 1;
// 		}
// 	}
// }
// console.log(number);


															// 7
// const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let number = 0;

// for(let i = 0; i <= myArr.length; i++) {
// 	if (myArr[i] > 0) {
// 		if (myArr[i] % 2 == 0) {
// 			number += myArr[i];
// 		}
// 	}
// }
// console.log(number);


															// 8
// const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let number = 0;

// for (let i = 0; i <= myArr.length; i++) {
// 	if (myArr[i] > 0) {
// 		if (myArr[i] % 2 == 1) {
// 			number += myArr[i];
// 		}
// 	}
// }
// console.log(number);


															// 9
// const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let number = 1;

// for(let i = 0; i <= myArr.length; i++) {
// 	if(myArr[i] > 0) {
// 		number *= myArr[i];
// 	}
// }
// console.log(number);


															// 10
// const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// let max = Math.max(...arr);
// const result = arr.map(v => v == max ? v : 0);
// console.log(result);