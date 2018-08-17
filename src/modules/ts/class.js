var Student = /** @class */ (function () {
    // 在构造函数的参数上使用public等同于创建了同名的成员变量。
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Student;
}());
function greet(person) {
    return 'Hello' + person.firstName + person.lastName;
}
var curUser = new Student("Chen", "nan");
document.body.innerHTML = greet(curUser);
