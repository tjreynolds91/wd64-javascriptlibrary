/*
* ************
! CONDITIONALS
* ************

? FALSY VALUES:
    - FALSE
    - !
    -"",'', ` `
    - null
    - undefined
    - Nan (not a number)

    When JS is expecting a boolean value and it is returned with one of these 6 values, it is evaluated as "falsy"
*/

/*
* ************
! IF
    -"If" something is true, do "this thing"
* ************

*/

let light = 'on';

if ( light == 'on') {
    console.log('The light is on');
};

let weather = 68;

if(weather < 70) {
    console.log('Wear a jacket.');
};

let rain = false;

if(weather < 70 && !rain) { // rain == true
    console.log('It is a little chilly and will possibly rain.');
    // new funtion
};

/*
* ************
! IF ELSE
* ************
    If/Else statements allow us the ability to write out a chain of events.
*/

let today = 75;

if(today < 70) {
    console.log('It is ' + today + ', wear a jacket');
} else {
    console.log('It is ' + today + ', No jacket needed.');
}

/*
! CHALLENGE
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log 'Hello, my name is <name>'
    If the name does not match, console.log 'Hello, what is your name?'
*/

let name = 'Inigo Montoya, you killed my father. Prepare to die';

if (name === 'Inigo Montoya, you killed my father. Prepare to die') {
    console.log('Hello, my name is ' + name + '.');
} else {
    console.log('What is your name?')
}
    
/*
* ************
! ELSE IF
    
* ************
 This is a condition that would be checked if the bove condition was not met.
*/

let cookTime = 40;

if(cookTime === 45) {
    console.log('Let us feast!');
} else if(cookTime >= 30) {
    console.log(`It has only been ${cookTime} miutes. Wait another 5 - 15 minutes.`);
} else if(cookTIme >= 20){
    console.log(`It has only been ${cookTime} miutes. Wait another 10 - 25 minutes.`);
} else {
    console.log(`It has only been ${cookTime} miutes. Perhaps at ;east try cooking it...`);
}

// The end of the ELSE IF statement should have a simple "else" to finsih it.
//interpolation is best practice `` instead of concantenation. '+'

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 12;

if(age >= 25) {
    console.log(`${age} is old enough to vote.`);
} else if(age >= 25) {
    console.log(`${age}You can rent a car!`);
}else if(age >= 21) {
    console.log (`${age} can drink!`);
} else if(age <= 17) {
    console.log (`${age} is too young to do anything`);
}
    
/*
* ************
! TERNARIES
    
* ************
    -This is a quick way of considering an if/else statement. We are capable of writing out our conditional in a simple line.
*/ 

let myName = 'Tim';

//if (myName == 'Tim') {
//    console.log('Hello, my name is ' + name + '.');
//} else {
//    console.log('What is your' +  myName + '?');
//}

//? condition ? if true : else result

//    (1)                              (2)                                   (3)
myName === 'Tim' ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`);

/*
    1: Conditon
    2: True (if true)
    3: False (else)
*/


//! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;
/*if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
*/
lampOn  == true && daytime !=true ? onsole.log('The lamp is on during the night') 
    : lampOn != true && daytime != true ? console.log('The lamp is off during the night') 
    : lampOn == true && daytime == true ? console.log('The lamp is on during the day') 
    : lampOn != true && daytime == true ? console.log('The lamp is off during the day') 
    : console.log('What lamp?')

/*
* ************
! SWITCH  
* ************

    -executes a block of code depending on different cases.
*/ 

let instructor = 'Josh';

switch(instructor) {
    case 'Ing':
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Zach':
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh':
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
}

instructor = 'Amdanda';

switch(instructor) {
    case 'Ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
    case 'Donovan':
        console.group(`${instructor} is part of the Dev team.`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
    case 'Junior':
        console.group(`${instructor} is part of the Dev team.`);
        break;
    default:
        console.log(`Sorry, I can;t find what ${instructor} teaches.`);
}

