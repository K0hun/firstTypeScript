function logName(name) {
    console.log(name);
}
// logName("younghun");
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
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = 'park';
        this.age = 30;
        this.gender = 'male';
        this.course = 'node.js';
        this.complete = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ', this.stdName);
    };
    MyStudent.prototype.getName = function () {
        return this.stdName;
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('엘리스');
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee',
        age: 20,
        gender: 'female',
        course: 'javascript',
        complete: true
    };
}
// console.log('getInfo(1) = ', getInfo(1));
function setInfo(student) {
    console.log('student = ', student);
}
var std = {
    stdId: 91011,
    stdName: 'park',
    age: 30,
    gender: 'male',
    course: 'node.js',
    complete: true
};
// setInfo(std);
