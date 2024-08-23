var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getInput = function (Name, Id, district) {
        this.Name = Name;
        this.Id = Id;
        this.district = district;
    };
    Person.prototype.display = function () {
        console.log("Name : ".concat(this.Name, ", Id : ").concat(this.Id, ", District : ").concat(this.district));
    };
    return Person;
}());
var person = new Person();
person.getInput('sojun', 15, 'brahmanbaria');
person.display();
