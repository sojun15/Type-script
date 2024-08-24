"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Export_1 = require("./Export");
var Full_stack = /** @class */ (function (_super) {
    __extends(Full_stack, _super);
    function Full_stack(Name, Id, work) {
        return _super.call(this, Name, Id, work) || this;
    }
    Full_stack.prototype.display = function () {
        console.log("Name : ".concat(this.Name, ", Developer Id : ").concat(this.Dev_id, ", Work : ").concat(this.work));
    };
    return Full_stack;
}(Export_1.Developer));
var fs = new Full_stack('sourov', 17, 'Full stack');
fs.display();
