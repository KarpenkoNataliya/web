console.log('Объявите переменную и запишите в нее свое имя как литерал строки.')
let user= {
    name :'nataliya'
}
console.log(user)
console.log('Объявите константы и запишите в нее месяц и год своего рождения как литерал числа.')
const mybirtday=2002;
const mybirtday2=1;
console.log(mybirtday)
console.log(mybirtday2)
//console.log('Создайте функцию, которая печатает приветствие и имеет три  аргумента: name, month, year.')


console.log('Реализуйте функцию range(start: number, end: number): array которая отдает массив чисел из диапазона [-15, 15] включая крайние числа.')
function range(start, end) {
    let result = [];
    let index = 0;
    for (let i = start; i <= end; i++, index++)
        result[index] = i;
    return result;
}
console.log(range(-15,15))
console.log('Реализуйте функцию rangeOdd(start: number, end: number): array которая отдает массив четных чисел из диапазона [-15, 15] включая крайние числа.')

function rangeOdd(start, end) {
    let result = range(start, end);
    for (let i = 0; i < result.length; i++) {
        if ((result[i] % 2 ) === 0)
        {
            result.splice(i, 1);
            i--;
        }
    }
    return result;
}
console.log(rangeOdd(-15,15))
console.log('Реализуйте функцию average с сигнатурой average(a: number, b: number): number вычисляющую среднее арифметическое своих аргументов.')
const average = (a,b) => {
    let s = Math.ceil(Math.atan2(a,b))
    return s
}
console.log(average(2,2))
console.log('Реализуйте функцию square с сигнатурой koren(x: number): number вычисляющую корень из своего аргумента.')
    const square = (x) => {
    let s2 = Math.sqrt(x)
    return s2
}
console.log(square(4))
console.log('Реализуйте функцию cube с сигнатурой raznica(x: number): number вычисляющую (куб  - квадрат) своего аргумента.')
const cube = (x) => {
    let s3 = x*x*x
    return s3
}
console.log(cube(3))