
let favMovie = {
    nameOfMovie: "Monty Python and The Holy Grail",
    runTime:97,
    characters:
        [ {charOne: {name:'Tim?', age: 'unknown', items:["Hat with Horns", 'Spits while talks']}},
          {charTwo: {name:'Black Knight', age: 42 , items:[{itemOne:"Helmet"},{itemTwo: 'No limbs!'}]}}] ,
    genre: "Comedy"

}


console.log(favMovie.nameOfMovie);
console.log(favMovie.runTime);
console.log(favMovie.characters);
console.log(favMovie.characters[1].charTwo.name);
console.log(favMovie.characters[1].charTwo.items[1].itemTwo);