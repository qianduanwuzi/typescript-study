class Student {
    fullName: string;
    // 在构造函数的参数上使用public等同于创建了同名的成员变量。
    constructor(public firstName, public lastName ) {
        this.fullName = firstName + lastName
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greet(person: Person) {
    return 'Hello' +  person.firstName + person.lastName
}

let curUser = new Student("Chen", "nan");

document.body.innerHTML = greet(curUser);
