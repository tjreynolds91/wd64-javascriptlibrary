/*
* ************
! Comments
* ************
*/

// Single Line Comment

// quick note

// here is my quick note

/* Multiline Line Comment
- Point 1
- Point 2
-Point 3 
-ect.
 */

















let favMovie = {
        nameOfMovie: "Monty Python and The Holy Grail",
        runTime:97,
        characters:
            [ {charOne: {name:'Tim?', age: 'unknown', items:["Hat with Horns", 'Spits while talks']}},
              {charTwo: {name:'Black Knight', age: 42 , items:["Helmet", 'No limbs!']}}] ,
        genre: "Comedy"

    }


console.log(favMovie.nameOfMovie);
console.log(favMovie.runTime);
console.log(favMovie.characters);
console.log(favMovie.characters[1].charTwo.name);
console.log(favMovie.characters[1].charTwo.items[1]);
