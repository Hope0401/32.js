//Задайте в коде переменную n с числовым значением.
//С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
 let n = 5
        if (n >= 0 && n <= 100) {
            alert("true");
        } else {
            alert("false");
        }
        console.log (n)

//Дан объект с именами и заработными платами:
//Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
//Заработная плата ххх составляет ххх рублей.
const engineers = {
Den: 1000,
Matt: 5000,
Steve: 2000
}
for (let prop in engineers) {
console.log (('заработная плата'+ ' ' + prop  + ' '+ 'составляет'+' ' + engineers[prop])
}


//Создать массив из 5 элементов.
//Используя цикл for, вывести каждый второй элемент массива в консоль.
stringArray = [ 1 , 2 , 33 , 44 , 45 ]
for (let i = 1; i < stringArray.length; i += 2) {
  console.log(stringArray[i]);
}

//Есть массив произвольных чисел
//Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
//Индексу 0 соответствует число 42
     numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
     for (let i = 0; i < stringArray.length; i += 1) {
  console.log (`Индексу ' + ' ' + i + ' ' + ' соответствует число' + ' ' numbers[i]);
}
     

//Дан массив объектов, например:
//Добавить в каждый объект дополнительное поле usersAnswer со значением null.
//Решение должно работать для массива любой длины.
       stringArray = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
for (let element of stringArray ) {
console.log (element)
element.new = 'null'
}
console.log (stringArray);

//Есть массив произвольных чисел:
//let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
//1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
       for ( let item of numbers) {
        console.log (item);
       }

  let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
  for (let i = 0; i < numbers.length; i ++ ) {
  console.log(numbers[i]);    


  //2) Посчитать и вывести в консоль сумму элементов в массиве.
        let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
     let summa = 0;
     for ( let i = 0; i < numbers.length; i++ ) {
        summa = summa + numbers[i];
     }
     console.log(summa);
//3) Посчитать и вывести в консоль сумму только четных чисел в массиве.
     let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
     let summa = 0;
     for ( let i = 0; i < numbers.length; i++ ) {
     if (numbers [i] % 2 = 0) {
        summa = summa + numbers [i];
     }
//4) Найти и вывести в консоль максимальное число массива.
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
    let max = numbers [0];
    for(let i = 0; i < numbers.length; i++){
        if((numbers [i]) < max){
            max = numbers [i]; 
}
         console.log(maxElement);

//Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
//Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
   let newArr = []
   for (let i = 0; i < numbers.length; i ++ ) {
    if ( arr[i] > 0) 
    newArr.push (arr [i]) ;
   }

  //Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
//Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit. 
let nums = [5, 4, 3, 8, 0] 
        let limit = 5;
        let newNums = []
        for (let i = 0; i < numbers.length; i ++ ) {
    if ( nums[i] >= 0) 
    newNums.push ( nums[i] ) ;
   }
   console.log (newNums);
   
// Существует массив объектов, описывающих пользователей, например:
//const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
//Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.
 let users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
            for (let prop in users) {
                if ( users[prop] >= 15) 
                console.log (prop)
                }
