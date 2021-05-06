"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pet = /** @class */ (function () {
    function Pet(id, name) {
        this.id = id;
        this.name = name;
        this.friends = [];
    }
    Pet.prototype.describe = function () {
        console.log('Our favorite pet,', this.name);
    };
    Pet.prototype.addFriends = function (friend) {
        this.friends.push(friend);
    };
    Pet.prototype.printMyFriends = function () {
        console.log(this.friends.length + " friends");
        console.log(this.friends);
    };
    return Pet;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Pet));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Pet));
var roo = new Dog("0", 'Roo Roo');
var olive = new Cat("10", "Olive");
console.log(roo);
console.log(olive);
roo.addFriends("Rissa");
roo.addFriends("Dillo");
roo.printMyFriends();
olive.addFriends('Arzy');
olive.describe();
