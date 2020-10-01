/*
* **************
! SYNTAX
* **************

keyword varName = [...arrayName];
*/

const nameOne = ['Eric', 'WInebrenner'];
const nameTwo = ['Zach', 'Maynard'];
const copiedNames = ['Adam','Jayne', ...nameOne, ...nameTwo];
console.log(copiedNames);

const copiedNamesDiff = ['Adam', 'Jayne',nameOne,nameTwo];
console.log(copiedNamesDiff);


/*  
Since the spread operator is pulling out all items of an array, we need to make sure we use the spread operator within a new array. This is so the values were pulled out gets placed into our new array.

... stands for the spread operator

...arrName (if not within array, will throw error)

-We can add to our original array without altering our copied array.
    - dependent on what data types we are using.
*/

nameOne.unshift('Mr.');
console.log('Altered: ', nameOne, "Spread: ", copiedNames);

/*
* **************
! ... NUMBERS
* **************
*/

console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.99, 5.49];
console.log(Math.min(prices)); //expects numbers and not an array
console.log(Math.min(...prices)); //Spread Operator pulls elements out of the prices array to allow the min method to work.

/*
* ****************************************************************************************************************************************************************************
! ... OBJECTS                                
* ***********
*/                                                                                              /* This all works the same way a tablet clones to an iphone.

const persons = [
    {
        name:'Lore',
        species: 'Arndroid'
    },
    {
        names: 'Picard',
        species: 'Human'
    },
];

const copiedPersons = [...persons];
persons.push({name: 'Worf', species: 'Klingon'});
console.log('Obj', persons, 'SO', copiedPersons);
// We are only changing the original array.

/*
    -primitive variable = primitive value
        ex:
            let x = 10;
            let y = 'abc';
            let z = null;

            - JS stores to memory both variable and values:
            Variables   Values
            x           10
            y           'abc'
            z           null

            ex: 
            let a = x;
            let b = y;
            console.log(x,y,a,b) -> 10, 'abc' , 10 'abc'

        - Altering one wouldn't affect the previous
            a = 5;
            b = 'xyz'
            console.log(x,y,a,b) - 10, 'abc' , 5, 'xyz'

        - 3 Dara Types th;at are passed by reference: Array, Funcgtions, and Objects 
            - techinally objects.
            - non primitive variables are given a reference to the value - the reference points to the location is memory.

            * pretend datatype: addess - denoted by < >

            let arr = [];
            arr.push(1);
            

            - How our code would in memory:

            VARIABLES   VALUES  ADDRESS  OBJECT
            arr         <#001>  #001     []
            arr         <#001>  #001     [1]

            let ref = [1];
            let = refCopy = ref;

            - Memory:
             VARIABLES   VALUES  ADDRESS  OBJECT
            ref         <#001>  #001     [1]
            refCopy     <#001>  
* **************************************************************************************************************************************************************************
*/ 

// const copiedPersons[0].name = "Data";
// console.log('Obj', persons, 'SO:', copiedPersons);

/*
* **********
! ... & AVOIDING CHANGING BOTH THE ORIGINAL & COPIED ARRAY
* *********
*/

const comics = [
    {title: 'Spider-Man', year: 1962}, {title: 'Detective Comics', year: 1939}
];

const copiedComics = comics.map(comic => ({
    title:comic.title,
    year: comic.year
}));

comics.push({title: 'Calvin and Hobbes', year: 1985});
console.log('Before Altering:', copiedComics);
copiedComics[1].title = 'Detective Comics #27';
console.log('After Altering:', comics, copiedComics);
