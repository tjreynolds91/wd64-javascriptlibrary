/*
* ************
! VARIABLES
* ************
*/

console.log('hello');
//THe console log is a debugging tool

let a = 2;

/*
- let : is our KEYWORD
- = : is our ASSIGNMENT OPERATOR
- 2 : is our variable VALUE 
*/


let b = 1;

console.log(a + b);

//! RESTRICTIONS
/*
    -a varialbe name must begin with a letter, underscore, or a dollar sign.
        -numbers may follow the above characters, BUT cannot come first.
        -javascript IS case sensitive - 'hello' and 'Hello; , these would be different variables.
        - no spaes are allowed in variable names.
        -camelCase is the best practice for naming
        - ex:
            let myName = 'Eric' ;
            is easier to read than
            let myname ='Eric';

*/

let startingWithLetter = "Works";
let _startWithUnderscore = "Works";
let $startWithDollarSign = "Works";
// let 4startWithNumber = "Breaks";

console.log(startingWithLetter, _startWithUnderscore, $startWithDollarSign);





/*
*KEYWORD

var, let, and const

    -var: 'old' keyword for variable. ** We won't be using it as often but is still a viable one to use.
    
    -let:"new" keyword for variable. (introduced with ES6 *newest version  of ECMASscript, wjich is a standardization of JS
        
    -const: also "new" keyword that declares an UNCHANGABLE, or constant, variable.
    */

    var variable ='var variable';
    let letVariable= 'let variable';

    //let function= 1; Cannot use reserved words within a variable name - *function is a reserved word.


    /*
* ************
! DECLARATIONS & INITIALIZATIONS
* ************
*/
// Declarations are theLEFT SIDE of the assignment operator
// let x;

//Indializations are the RIGHTSIDE of the assignment operator
let x = 10

// 10 is our initialization.

let y;
console.log('declaration:', y)

y = 10;
console.log('initialization: ', y);


y = 33;
console.log('initialization 2:', y);

// 

//?

let today 