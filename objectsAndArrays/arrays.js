/*
* ************
!ARRAYS
* ************
*/


//? POPULATING & REFERNCING

LET LIST = ['orange', 'banana', 'oreos'];
console.log(list[1]);

//JS cpunts starting at 0/ SO in this array, it be 0-2
// When we call an array, we can appen brackets onto the end of our array with the index number we want to reference. This is SWUARE BRACKET NOTATION.


let students =['Tony', 'Marshall','Rhys', 'Ray', 23 , true,['Ryan', 'Iesha', 'Amira']];

//             (1)
//console.log(typeof students);
console.log(students instanceof Array); // the instanceof operator is used to check the type of an object at run time. Remember that arrays are technically objects
//                     (2)
//  (1 & 2) are operators.

console.log(students[2]);


/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];

console.log(students[1]);
console.log(students[6][2]);
console.log(`Hello ${students[6][2]}!`);
console.log(`Hello ${students[1]}!`);

//? ARRAY METHODS

/// We have multiple methods to allow us to manipulate arrays as we may need.

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for(foodItem of food) {
console.log(foodItem);
}


//Add to our array
//    (1) - 'push' here is a method.
food.push('Pizza'); //Appends Pizza to the end of our array
console.log('push:', food);

//Remove and insert  
//          (1)(2)(3)                                     (1)         (2)             (3)
food.splice(1,1, 'Bananas'); //Removes Shrimp and add Bananas => (position, how many to remove, what to add)
console.log('splice:', food);

*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies =['star wars','ants', 'toy story', 'shrek'];
console.log('Before');
movies.forEach(movies +> console.log(movies));

