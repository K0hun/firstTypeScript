function logName(name) {
    console.log(name);
}
logName("younghun");
var student = {
    name: "john",
    course: "typescript",
    score: 100,
    grade: function () {
        console.log("A");
    },
};
student.name = "lee";
student.score = 200;
// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = "lee";
var age = 20;
var gender = "male";
var course = "Typescript";
var complete = false;
/*
컴파일 에러, syntax 에러(문법 오류)
let stdId: number = '1111';
*/
//함수의 데이터 타입 명시(매개변수, 리턴타입)
function Plus(a, b) {
    // return a + b;
}
function getInfo(id) {
    return null;
}
