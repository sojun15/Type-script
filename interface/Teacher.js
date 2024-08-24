var Teacher = /** @class */ (function () {
    function Teacher(name, degree) {
        var _this = this;
        this.name = name;
        this.degree = degree;
        this.output = function () {
            return "Name : ".concat(_this.name, ", Degree : ").concat(_this.degree);
        };
    }
    return Teacher;
}());
var Employee = /** @class */ (function () {
    function Employee(name, position) {
        var _this = this;
        this.name = name;
        this.position = position;
        this.output = function () {
            return "Name : ".concat(_this.name, ", Degree : ").concat(_this.position);
        };
    }
    return Employee;
}());
var teacher1 = new Teacher('atanu', 'assistant professor');
console.log(teacher1.output());
var teacher2 = new Teacher('shamim', 'professor');
console.log(teacher2.output());
var teacher3 = new Teacher('anisul', 'professor');
console.log(teacher3.output());
var employee1 = new Employee('anoyar', 'office helper');
console.log(employee1.output());
