interface PersonType {
    firstName: string;
    lastName: string;
};

function greeter(person: PersonType) {
    return 'hello, ' + person.firstName + person.lastName;
}

// let personA = {
//     firstName: '李',
//     lastName: '明'
// }
// console.log(greeter(personA))

// 如果偷偷去掉一个属性
// let personA = {
//     firstName: '李'
// }
// 会报错：
/** 类型“{ firstName: string; }”的参数不能赋给类型“PersonType”的参数。
类型 "{ firstName: string; }" 中缺少属性 "lastName"，但类型 "PersonType" 中需要该属性 */
// console.log(greeter(personA))