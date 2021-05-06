"use strict";
// interface vs custom type
// interface exclusively deals with objects ****
// can implement multiple interfaces w/ a ,
var Person = /** @class */ (function () {
    // age: 28
    function Person(n) {
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Dill");
user1.greet('hi there I am not');
