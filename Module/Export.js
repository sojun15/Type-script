"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
var Developer = /** @class */ (function () {
    function Developer(Name, Dev_id, work) {
        this.Name = Name;
        this.Dev_id = Dev_id;
        this.work = work;
    }
    Developer.prototype.display = function () {
        console.log("Name : ".concat(this.Name, ", Id : ").concat(this.Dev_id, ", District : ").concat(this.work));
    };
    return Developer;
}());
exports.Developer = Developer;
