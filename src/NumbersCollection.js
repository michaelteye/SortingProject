"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    NumbersCollection.prototype.length = function () {
        return this.data.length;
    };
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
var collection = new NumbersCollection([1, 2, 3]);
// 342417
// lefthand = 3 // index 0
// this.data[leftIndex] = 3
// this.data[rightIndex] = 4
// this.data[leftIndex] = this.data[rightIndex] === 3 = 4 
// this.data[leftIndex] = 4
// this.data[rightIndex] = lefthand = 3
