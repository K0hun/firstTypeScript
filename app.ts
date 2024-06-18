function logName(name: string) {
  console.log(name);
}

// logName("younghun");

let student = {
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
let stdId: number = 1111;
let stdName: string = "lee";
let age: number = 20;
let gender: string = "male";
let course: string = "Typescript";
let complete: boolean = false;
/*
컴파일 에러, syntax 에러(문법 오류)
let stdId: number = '1111';
*/

//함수의 데이터 타입 명시(매개변수, 리턴타입)
function Plus(a: number, b: number): void {
  // return a + b;
}

//열거형 : 사용자 정의 타입
enum GenderType{
    Male='male',
    Female='female',
    GenderNeutral = 'neutral'
}

// 인터페이스
interface Student {
  stdId: number;
  stdName?: string;
  age?: number;
  gender?: 'male' | 'female';
  course?: string;
  complete?: boolean;
  setName?: (name: string) => void;
  // == setName(name: string): void;
  getName?: () => string;
}

// 인터페이스를 사용한 클래스 생성
class MyStudent implements Student {
    stdId = 91011;
    stdName = 'park';
    age = 30;
    gender: 'male' | 'female' = 'male';
    course = 'node.js';
    complete = true;

    setName(name: string): void{
        this.stdName = name;
        console.log('이름 설정 : ', this.stdName);
    }
    getName(): string{
        return this.stdName;
    }
}

const myInstance = new MyStudent();
myInstance.setName('엘리스');

function getInfo(id: number): Student {
  return {
    stdId : id,
    stdName : 'lee',
    age : 20,
    gender : 'female',
    course: 'javascript',
    complete : true
  };
}

// console.log('getInfo(1) = ', getInfo(1));

function setInfo(student : Student): void{
    console.log('student = ', student);
}

let std = {
    stdId : 91011,
    stdName : 'park',
    age : 30,
    gender : 'male',
    course: 'node.js',
    complete : true
  };

// setInfo(std);

const user : {name : string, age : number} = {
  name: 'john',
  age: 25
};