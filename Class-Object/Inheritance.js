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
var Human = /** @class */ (function () {
    function Human(Name, Id, district) {
        this.Name = Name;
        this.Id = Id;
        this.district = district;
    }
    Human.prototype.display = function () {
        console.log("Name : ".concat(this.Name, ", Id : ").concat(this.Id, ", District : ").concat(this.district));
    };
    return Human;
}());
var Men = /** @class */ (function (_super) {
    __extends(Men, _super);
    function Men(Name, Id, district, age) {
        var _this = _super.call(this, Name, Id, district) || this;
        _this.age = age;
        return _this;
    }
    Men.prototype.display = function () {
        console.log("Name : ".concat(this.Name, ", Id : ").concat(this.Id, ", District : ").concat(this.district, ", Age : ").concat(this.age));
    };
    return Men;
}(Human));
var human = new Human('sojun', 15, 'brahmanbaria');
human.display();
var men = new Men('sourov', 17, 'barisal', 24);
men.display();
