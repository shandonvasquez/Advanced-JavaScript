//.padStart()
//.padEnd()
//  please provided more examples of padStart and padEnd
//.padStart()
//.padEnd()
//  please provided more examples of padStart and padEnd
const endline = '     ||<- End line';
let pig = '🐷';
let cat = '🐱';

console.log(endline);
console.log(pig.padStart(7));
console.log(cat.padStart(7));


console.log(endline);
console.log(pig.padEnd(7));
console.log(cat.padEnd(7));


const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log(turtle.padStart(7));
console.log(rabbit.padStart(7));

//.padEnd()
console.log(startLine);
console.log(turtle.padEnd(7));
console.log(rabbit.padEnd(7));


console.log('Turtle'.padStart(10));

console.log('Turtle'.padEnd(10));

const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values); // Output: [1, 2, 3]


let ob1 = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(ob1).forEach((key, index) => {
    console.log(key, ob1[key]);
})

Object.values(ob1).forEach(value => {
    console.log(value);
}
)

Object.entries(ob1).forEach(value => {
    console.log(value);
}
)

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

console.log(array.flat(2));


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
