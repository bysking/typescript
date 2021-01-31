function greeter (person: string) {
    return 'hello,' + person;
}

// 按照正确的类型进行函数调用

let user = 'Jane';
console.log(greeter(user));

// 如果尝试对greeter传入一个数组:ts会检测到类型与定义不匹配

// let user = ['a', 'b'];
// console.log(greeter(user));