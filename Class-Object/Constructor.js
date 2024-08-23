var Student = /** @class */ (function () {
    function Student(stdName, Id, district) {
        this.stdName = stdName;
        this.Id = Id;
        this.district = district;
    }
    Student.prototype.display = function () {
        console.log("Name : ".concat(this.stdName, ", Id : ").concat(this.Id, ", District : ").concat(this.district));
    };
    return Student;
}());
var student = new Student('sourov', 15, 'barisal');
student.display();
