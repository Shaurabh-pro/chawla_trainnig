"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = /** @class */ (function () {
    function app() {
    }
    app.prototype.test = function () {
        console.log("test func is working");
    };
    return app;
}());
var a = new app();
a.test();
function addTwoNumber(a, b) {
    return a + b;
}
console.log(addTwoNumber(12, 40));
