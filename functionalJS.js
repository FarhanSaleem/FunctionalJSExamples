/**
 * Created by musicology on 9/20/17.
 */

// Example of Imperative coding in JS
// Comparing imperative to declarative JS functions
// currying example

activate();

function activate() {
    let numbers = [1,2,3,4];
    console.log(imperativeDoubleNumbers(numbers));
    console.log(declarativeDoubleNumbers(numbers));

    //currying function example and closure
    const add3ToInput = createAdder(3);
    console.log('adding 3 to 2 = ', add3ToInput(2));
    console.log('adding 3 to 5 = ', add3ToInput(5));

    //currying with multiple functions
    let car = make =>
        model =>
            year =>
            'Make is ' + make + ', ' +
            'Model is ' + model + ', ' +
            'Year is ' + year;
    let accordCar = car('Honda')('Accord')('2017');

    console.log(accordCar);

}

function imperativeDoubleNumbers(numbers) {
    const doubled = [];
    const l = numbers.length;
    
    for (let i = 0; i < l; i++) {
        doubled.push(numbers[i] * 2);
    };

    return doubled;
}

// Declarative functional JS for doubling function

function declarativeDoubleNumbers(numbers) {
    return numbers.map(n => n * 2);
}


// Simple Example of currying higher order function and closure

function createAdder(x) {
    return (y) => x + y;
};







