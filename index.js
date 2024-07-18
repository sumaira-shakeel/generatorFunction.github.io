"use strict";
//generator function  me app multiple values return karwate hen
Object.defineProperty(exports, "__esModule", { value: true });
function* abc() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
const generatorFunction = abc();
console.log(generatorFunction.next().value);
console.log(generatorFunction.next().value);
console.log(generatorFunction.next().value);
