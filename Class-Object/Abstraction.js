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
var Messanger = /** @class */ (function () {
    function Messanger() {
    }
    return Messanger;
}());
var Texts = /** @class */ (function (_super) {
    __extends(Texts, _super);
    function Texts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Texts.prototype.message = function () {
        console.log("Here we can send text message only");
    };
    return Texts;
}(Messanger));
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Media.prototype.message = function () {
        console.log("Here we can send vedio and image message only");
    };
    return Media;
}(Messanger));
var mes1 = new Texts();
var mes2 = new Media();
mes1.message();
mes2.message();
