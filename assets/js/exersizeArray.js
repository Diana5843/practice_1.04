// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

const MyArray = [4, -2, 5, 19, -130, 0, 10];
let min = 99999999, max = -9999999;

for(const el of MyArray){
    if(el > max){
        max = el;
    }
    if(el < min){
        min = el;
    }
}
console.log(`minnumber = ${min}, maxnumber = ${max}`);



//part 2 

// const MyArray = [4, -2, 5, 19, -130, 0, 10];
// const max = Math.max.apply(null, MyArray);

// const min = Math.min.apply(null, MyArray);

// console.log("Max number =", max);
// console.log("Min number =", min);


//Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
let arr = [12, 15, 20, 25, 59, 79];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}

let result = sum / arr.length;
console.log("Среднее арифметическое =", result);


//part 2
// let arr = [12, 15, 20, 25, 59, 79];

// let sum = arr.reduce((a, b) => a + b, 0); //применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно значение.
// let result = sum / arr.length;

// console.log(result);


//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // объединение массивов

console.log(arr3);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const array1 = [1, 2, 3];
const reversed = array1.reverse(); //Первый элемент массива становится последним, а последний — первым.
console.log("reversed = ", reversed);

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const arrayNew = [1, 2, 3];
arrayNew.push(4, 5, 6); //push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
console.log(arrayNew);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arrayNew2 = [1, 2, 3];
arrayNew2.unshift(4, 5, 6);  // добавляет один или более элементов в начало массива и возвращает новую длину массива.
console.log(arrayNew2);

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

const arrDelete = ['js', 'css', 'jq'];
let shifted = arrDelete.shift(); // удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
console.log("first element = ", shifted);
console.log(arrDelete);

//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

arrDelete2 = ['js', 'css', 'jq'];
let popped = arrDelete2.pop(); // удаляет последний элемент из массива и возвращает его значение
console.log("last element = ", popped);
console.log(arrDelete2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const arrSlience = [1, 2, 3, 4, 5];
let num = arrSlience.slice(0, 3);  //возвращает новый массив, содержащий копию части исходного массива
console.log(num);


//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const arrSlience2 = [1, 2, 3, 4, 5];
let num2 = arrSlience.slice(3, 5);
console.log(num2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2); //Удаляет элемент по индексу 
console.log(numbers);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const numbers2 = [1, 2, 3, 4, 5];
const newNumbers2 = numbers2.splice(1, 3);
console.log(newNumbers2);


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let a = [1, 2, 3, 4, 5];
a.splice(3, 0, 'a', 'b', 'c');
console.log(a);


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let b = [1, 2, 3, 4, 5];
b.splice(1, 0, 'a', 'b');
b.splice(6, 0, 'c');
b.splice(8, 0, 'e');
console.log(b);



//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

let arrNumberSort = [3, 4, 1, 2, 7];
console.log(arrNumberSort.sort());

//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

let objArr = {
    js:'test', 
    jq: 'hello', 
    css: 'world'
};
console.log(Object.keys(objArr)); // возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке


// -----------------

//Hеобходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

let elemArr = [1, 2, 'fff', 4, 5];
let str = 'fff';

function hasElem (elemArr, str){
    const index = elemArr.indexOf(str);
    if(index === -1){
        return false;
    }else{
        return true;
    }
}

console.log(hasElem(elemArr, str));


//Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

const arrNum3 = [12, 10, 6, 3, 8, 7];
console.log(arrNum3.indexOf(3) !== -1);

//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.

let arr5 = [10, 23, 23, 19, 6, 56, 32];

function check(arr) {
    for (let i=1; i<arr.length; ++i) {
      if (arr[i] === arr[i-1]) {
        return true;
      }
    }
    
    return false;
  }
  
  console.log(check(arr5));

