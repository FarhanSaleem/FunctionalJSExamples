/**
 * Created by musicology on 9/27/17.
 */

// Use recursion to countdown
let countDownFrom = (num) => {
    if (num === 0) return;
    console.log(num);

    countDownFrom(num - 1);
}

console.log('Recursively counting down from 10');
countDownFrom(10);

// Use recursion function to build a tree of animal categories
let categories = [
    { id: 'animals', 'parent': null},
    { id: 'mammals', 'parent': 'animals'},
    { id: 'cats', 'parent': 'mammals'},
    { id: 'dogs', 'parent': 'mammals'},
    { id: 'husky', 'parent': 'dog'},
    { id: 'bulldog', 'parent': 'dog'},
    { id: 'persian', 'parent': 'cat'},
    { id: 'small hair', 'parent': 'cat'},
];

let makeTree = (categories, parent) => {
    let node = {};
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id));
    return node;
};

console.log(
    JSON.stringify(makeTree(categories, null), null, 2)
);