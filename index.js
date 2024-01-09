//.padStart()
//.padEnd()

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
