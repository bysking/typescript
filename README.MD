TypeScript 学习笔记 -- bysking

- Ts 是什么？ 
TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。
TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。 --官网[https://www.tslang.cn/]

- 怎么开始使用？

1. 安装（两种安装方式）
```js
npm install -g typescript tsc // npm方式全局安装
yarn global add typescript // yarn方式全局安装
```

2. 编译
```javascript
tsc helloworld.ts
// 测试用例，可以查看example/01-start-ts-demo
```


- 类型

> 原始js代码
```javascript
function greeter (person) {
    return 'hello,' + person;
}

let user = 'Jane';
console.log(greeter(user));
```
> ts 增加类型注解的代码

```javascript

// 参数添加类型string约束， 函数返回添加类型string约束
function greeter (person: string):string {
    return 'hello,' + person;
}

let user: string = 'Jane'; // 也可以直接let user = 'Jane'; ts 会自动根据字符串 'Jane'的类型（string）对user变量进行类型推断
console.log(greeter(user));

// 如果尝试对greeter传入一个数组:ts会检测到类型与定义不匹配，此时如果对这样存在混乱的代码进行ts编译会报错，但是还是会通过编译
// let user = ['a', 'b'];
// console.log(greeter(user));
```

- 接口

> 回顾刚才的例子

如果函数的参数是一个对象，我们怎么去进行参数的类型限制呢？
```javascript

interface PersonType {
    firstName: string;
    lastName: string;
};

function greeter(person: PersonType) {
    return 'hello, ' + person.firstName + person.lastName;
}

// 查看demo example\02-interface-demo
```

- 类

ts支持基于类的面向对象编程
```javascript

```

























```javascript

```