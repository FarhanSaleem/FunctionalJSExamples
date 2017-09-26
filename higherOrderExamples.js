/**
 * Created by musicology on 9/26/17.
 */

//Functional Javascript Examples using ES6

// Filter function example
var animals = [
    { name: 'Oscar', species:'Tiger'},
    { name: 'Jeeves', species:'Monkey'},
    { name: 'SharpTooth', species:'Shark'},
    { name: 'Samwich', species:'Tuna'},
    { name: 'MissMeow', species:'Cat'},
    { name: 'Ted', species:'Bear'},
    { name: 'Jumanji', species:'Elephant'},
];


// Use filter function to get only animals with the Tiger species
var tigers = animals.filter(animal => animal.species === 'Tiger');
console.log('Tigers: ', tigers);


//Use Map function for getting an array of animal names
var animalNames = animals.map(animal => animal.name);
console.log('Animal Names ', animalNames);


var orders = [
    { amount: 250 },
    { amount: 50 },
    { amount: 100 },
    { amount: 400 },
    { amount: 500 }
];

// Add all orders up using array reduce function
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
console.log('The total is', totalAmount);

// Use reduce to find average of all amounts
var avg = orders.reduce((sum, order, index) => {
    debugger;
    sum.amount += order.amount;
    if ( index === orders.length - 1) {
        return sum.amount/orders.length;
    } else {
        return sum;
    }
});

console.log('The average is ', avg);