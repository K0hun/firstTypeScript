var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "orange"];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//   }
var mixedArray = [1, 'two', 3, 'four'];
var infer = [1, 2, 3]; // 타입 추론
for (var i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}
// 읽기전용 배열
var readOnlyArray = [1, 2, 3];
// 튜플 : 타입의 순서가 정해져 있음
var greeting = [1, 'hello', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
