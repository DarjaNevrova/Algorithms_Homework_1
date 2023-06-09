//Algorithms_Homework_one

// 1) Вопрос: Что такое алгоритм (можно своими словами)
//    Ответ: Алгоритм сам по себе является идеей, которую мы сформулировали и далее уже, мы воплощаем данную идею, используя языки
//    программирования.
//    Используя алгоритмы, можно переключаться с одного языка программирования на другой, используя некий алгоритм.
//    Алгоритм является совокупностью точно заданных правил решения класса задач, либо набор инструкций, которые описывают 
//    порядок действий для решения задачи. 

// 2) Вопрос: Какие основные параметры алгоритма?
//    Ответ: 2.1) Алгоритм должен принимать 0, либо более входных данных;
//           2.2) Завершиться через конечное время и производить один или более вывод(ов);
//           2.3) Консистентный;
//           2.4) Шаги должны быть эффективными(В идеале);


// 3) Вопрос: Какие основные способы описания алгоритма существуют?
//    Ответ: 3.1) Текстовый - расписывание шагов алгоритма последоватльно в тексте;
//           3.2) Алгоритмический язык - псевдокод;
//           3.3) Графический способ - изображается графическим способом в виде блок-схем.


// 4) Вопрос: Какие факторы учитываются при построении алгоритма? В чем они измеряются? Опишите алгоритм и напишите код для следующих задач (сделайте оценку сколько потребовалось памяти и времени)
//    Ответ: 4.1) Фактор времени - время измеряется путем подсчета кол-во ключевых операций;
//           4.2) Фактор пространства - оно измеряется путем подсчета максимального обьема памяти, требуемого алгоритмом.
//           4.3) 1 задача - Space complexity: 1 + 1 переменная и вывод на консоль;
//                           Time complexity: от 0 до размера массива

//           4.4) 2 задача - Space complexity: 1 + 2 переменные и вывод на консоль;
//                           Time complexity: размер массива

// 5) Вопрос: Дан массив из 10 чисел (заполните любыми числами в промежутке от -100 до 100), необходимо найти сумму всех положительных чисел.
//    Ответ: 
// 5.1) Псевдокод для задачи: 
//      Cоздайте массив из 10 чисел (от -100 до 100);
//      Создайте переменную для позитивных чисел - 0;
//      Если значения из массива больше 0, увеличь переменную для позитивных чисел на 
//      значение из массива
//      Выведи в консоль переменную для позитивных чисел
//

// 5.2) Решение задачи: 

// const numbers = [-50, 20, -20, 55, 70, 80, -10, 90, -45, 15];

// let positiveSum = 0;

// for( let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 0){
//         positiveSum += numbers[i];
//     }
// }

// console.log(positiveSum);



// 6) Вопрос: Дан массив из 10 чисел, найдите средне-арифмитическое всех чисел.
//    Ответ: 
// 5.1) Псевдокод для задачи: 
//      Cоздай массив из 10 чисел;
//      Создай переменную для суммы всех чисел из массива, равную 0;
//      Пройдись циклом по массиву и сложи переменную для суммы с значением из массива;
//      Создай еще одну переменную, где необходимо поделить сумму чисел из массива на
//      длину массива;
//      Выведи в консоль переменную, где делили сумму чисел из массива на
//      длину массива

// 5.2) Решение задачи: 

// const numbers = [2, 5, 6, 25, 99, 35, 70, 11, 65, 8];

// let sum = 0;

// for ( let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }

// let average = sum / numbers.length;

// console.log(average);
