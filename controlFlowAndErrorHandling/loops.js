/*
* ************
! SWITCH  
* ************
    - Loops help us repeat a process without writing a lot of code
    
    We need to:
    1) Create an Index
    2) Run a condtion
    3)Change to the indexing variable (execution of condition)

*/

for( let i = 0; i <= 10; i++) {
    console.log(i);
}

/* 
    We state our loop with a "for".
    Within this function, we are injecting some parameters that JSwill run against
        (index; condtion; change index-> result)

        for(<creat index variable.; <run condition>; <change index>) {
            <return results>
            *will cont. until condition is met.
        }

*/

let x = 20;

for(i = 10;i <= x; i++) {
    console.log(i);
}


for(let i = 2; i> -10; i-= 4) {
    console.log(i);
}

let word = 'supercalifragilisticexpialidocious';

for(let i =0; i < word.length; i++) {
    console.log(i, word[i]);
}


/*
* ************
! FORIN LOOP
* ************
*/

let city = {
    name:'Indianapolis',
    pop:877000,
    speedway: true
};

for(info in city) {
    console.log(info)
    console.log(city[info]);

}




//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.





function titleCase(str) {
    var newstr = str.split(name);
    for(i=0;i<newstr.length;i++){
      if(newstr[i] == name) continue;
      var copy = newstr[i].substring(1).toLowerCase();
      newstr[i] = newstr[i][0].toUpperCase() + copy;
      console.log(name)
      
    }
     newstr = newstr.join(name);
     return newstr;
        
  } 
