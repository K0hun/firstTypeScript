class Employee{
    private empName: string;
    private age: number;
    private empJob: string;

    constructor(empName: string, age: number, empJob: string){
        this.empName = empName;
        this.age = age;
        this.empJob = empJob;
    }

    public printEmp = (): void => {
        console.log(`${this.empName}의 나이는 ${this.age}이고, 직업은 ${this.empJob}입니다.`);
    }
};

let employee1 = new Employee('kim', 20, '개발자');
// employee1.empName = 'lee' // 접근지정 제한
employee1.printEmp();
