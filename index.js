// //.padStart()
// //.padEnd()
// //  please provided more examples of padStart and padEnd
// //.padStart()
// //.padEnd()
// //  please provided more examples of padStart and padEnd
// const endline = '     ||<- End line';
// let pig = '🐷';
// let cat = '🐱';

// console.log(endline);
// console.log(pig.padStart(7));
// console.log(cat.padStart(7));


// console.log(endline);
// console.log(pig.padEnd(7));
// console.log(cat.padEnd(7));


// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// console.log(startLine);
// console.log(turtle.padStart(7));
// console.log(rabbit.padStart(7));

// //.padEnd()
// console.log(startLine);
// console.log(turtle.padEnd(7));
// console.log(rabbit.padEnd(7));


// console.log('Turtle'.padStart(10));

// console.log('Turtle'.padEnd(10));

// const obj = { a: 1, b: 2, c: 3 };
// const values = Object.values(obj);
// console.log(values); // Output: [1, 2, 3]


// let ob1 = {
//     username0: 'Santa',
//     username1: 'Rudolf',
//     username2: 'Mr.Grinch'
// }

// Object.keys(ob1).forEach((key, index) => {
//     console.log(key, ob1[key]);
// })

// Object.values(ob1).forEach(value => {
//     console.log(value);
// }
// )

// Object.entries(ob1).forEach(value => {
//     console.log(value);
// }
// )

// // #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array1 = [[1],[2],[3],[[[4]]],[[[5]]]]

// console.log(array1.flat(2));


// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

// console.log(greeting.flatMap(value => value.join(' ')));
// // Solve the below questions:


// //#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// //Solution

// //#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// //
// console.log(trapped.flat(Infinity));


// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
// //Solution:
// console.log(userEmail3.trimStart().trimEnd());
// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// //Solution
// console.log(Object.entries(users));

// //#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// //Solution
// updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// //Solution

// console.log(Object.fromEntries(updatedUsersArray));

// //////////////////////////////////////////////////////////

// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 1000
// }

// //1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// //2
// basket.forEach(item => {
//   console.log(item);
// })

// for (item in detailedBasket) {
//   console.log(item);
// }

// for (item of basket) {
//   console.log(item);
// }

// // Question #1:
// // create a function called biggestNumberInArray() that takes
// // an array as a parameter and returns the biggest number.
// // biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// // Use at least 3 different types of javascript loops to write this:
// const array = [-1,0,3,100, 99, 2, 99] // should return 100
// const array2 = ['a', 3, 4, 2] // should return 4
// const array3 = [] // should return 0



// function biggestNumberInArray(arr) {
//     if (arr.length === 0) {
//         return 0; // return 0 for an empty array
//     }

//     let maxNumber = arr[0]; // Initialize maxNumber with the first element of the array

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNumber) {
//             maxNumber = arr[i]; // Update maxNumber if a larger element is found
//         }
//     }

//     return maxNumber; // Return the maximum number in the array
// }

// // Test cases
// console.log(biggestNumberInArray(array));  // should return 100


// function biggestNumberInArray2(arr) {

// }

// function biggestNumberInArray3(arr) {

// }


// // Question #2:
// // Write a function checkBasket() that lets you know if the item is in the basket or not
// amazonBasket = {
//   glasses: 1,
//   books: 2,
//   floss: 100
// }

// function checkBasket(basket, lookingFor) {

// }


// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
  console.log('fight!');
} else {
  console.log('walk away...');
}

// ReplaceAll
const pharse = 'This is a test pharse';
const pharse2 = pharse.replaceAll('pharse', 'Image');

