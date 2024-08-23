var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Male = /** @class */ (function () {
    function Male(name, age, nid) {
        this.name = name;
        this.age = age;
        this.nid = nid;
    }
    Male.prototype.getVariable = function () {
        return this.name;
    };
    Male.prototype.setVariable = function (nid) {
        this.nid = nid;
    };
    Male.prototype.display = function () {
        console.log("Name : ".concat(this.name, ", age : ").concat(this.age, ", nid : ").concat(this.nid));
    };
    return Male;
}());
var male1 = new Male('sojun', 24, 420);
console.log(male1.getVariable());
male1.setVariable(170);
male1.display();
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age, nid) {
        return _super.call(this, name, age, nid) || this;
    }
    Man.prototype.change = function (age) {
        this.age = age;
    };
    Man.prototype.display = function () {
        console.log("age : ".concat(this.age));
    };
    return Man;
}(Male));
var man1 = new Man('mogambel', 22, 220);
man1.change(15);
man1.display();
