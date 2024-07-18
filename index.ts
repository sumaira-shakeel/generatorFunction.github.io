//generator function  me app multiple values return karwate hen
//How Generator Functions Work

// When you call a generator function, it returns an iterator object, which has a next() method. Each time you call next(), the generator function executes until it reaches the next yield expression, and then returns the value produced by that yield
//TypeScript Support

// TypeScript provides excellent support for generator functions, including:

// Type inference: TypeScript can infer the type of the values produced by a generator function.
//Error checking: TypeScript checks for errors in generator functions, such as incorrect use of yield or return.
// Compatibility: TypeScript generator functions are compatible with JavaScript generator functions, making it easy to integrate with existing codebases.
function* abc(){

    let  i = 0;
    while(true){
       yield i++;
    }
}

const generatorFunction = abc();
console.log(generatorFunction.next().value);
console.log(generatorFunction.next().value);
console.log(generatorFunction.next().value);