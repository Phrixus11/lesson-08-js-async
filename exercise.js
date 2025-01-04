//Рекурсия setTimeout, аналог setInterval
// let i = 1;
// setTimeout(function run() {
//   console.log(i);
//   i++
//   setTimeout(run, 1000);
// }, 1000);

//-----------------------------------------------------------------------------------------------------------------------------

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

//version 1
// let printNumbers = function (from, to) {
//     let intervalId = setInterval(() => {
//         if (from !== to + 1) {
//             console.log(from);
//         } else {
//             clearInterval(intervalId)
//         }
//         from++
//     }, 1000)
// }

// printNumbers(5, 10)

//version 2
let printNumbers = (from, to) => {
    let timeoutId = setTimeout(function run() {
        if (from !== to + 1) {
            console.log(from);
        } else {
            clearTimeout(timeoutId)
            return
        }
        from++
        let timeoutId2 = setTimeout(run, 1000);
    }, 1000)
}

printNumbers(5, 10)