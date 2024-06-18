class Employee {

  constructor( // 선언과 동시에 초기화
    private _empName: string,
    private _age: number,
    private _empJob: string
  ) {}

  public printEmp = (): void => {
    console.log(
      `${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`
    );
  };

  public get empName() {
    return this._empName;
  }

  public set empName(val: string) {
    this._empName = val;
  }
}

let employee1 = new Employee("kim", 20, "개발자");
// employee1._empName = 'lee' // 접근지정 제한
employee1.empName = "lee";
employee1.printEmp();
