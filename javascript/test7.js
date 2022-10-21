"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        console.log("Constructor called with name=".concat(name));
    }
    return Person;
}());
var personInstance = new Person('Jane');
console.log(personInstance);
