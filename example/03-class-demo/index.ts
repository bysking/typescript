class Student {
    fullName: string;

    // 构造函数使用public声明会默认创建成员变量
    constructor (public firstName, public lastNmae) {
        this.fullName = firstName + lastNmae;
    }

    log() {
        console.log(this.fullName);
        console.log(this.firstName); // 构造函数使用public声明会默认创建成员变量
        console.log(this.lastNmae); // 构造函数使用public声明会默认创建成员变量
    }
}

let s = new Student('李', '华');

s.log();
