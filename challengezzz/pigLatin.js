// /*
// ! PIG LATIN CHALLENGE (pair coding) - morning
// ************
//     - Create a function that takes in strings
//     - In the function, translate a phrase into pig latin and print it to the console.
    
//     **
//     - If able to do so, return the value into another variable and print that variable
//     What is Pig Latin?
//         * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
//         * If the word begins with a vowel, simply add an 'ay' at the end of the word
//         * 
//     - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
// */

// // function pigLatin(str) {
// //     // Convert string to lowercase
// //     str = str.toLowerCase()
// //     // Initialize array of vowels
// //     const vowels = ["a", "e", "i", "o", "u"];
// //     // Initialize vowel index to 0
// //     let vowelIndex = 0;
  
// //     if (vowels.includes(str[0])) {
// //       // If first letter is a vowel
// //       return str + "way";
// //     } else {
// //       // If the first letter isn't a vowel i.e is a consonant
// //       for (let char of str) {
// //         // Loop through until the first vowel is found
// //         if (vowels.includes(char)) {
// //           // Store the index at which the first vowel exists
// //           vowelIndex = str.indexOf(char);
// //           break;
// //         }
// //       }
// //       // Compose final string
// //       return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
// //     }
// //   }

// //   function pigLatin(str) {
// // //     return str
// // //     .replace(/^([aeiouy])(._)/, '$1$2way')
// // //     .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
// // // }


// // console.log(pigLatin)

// // 4

// // // function translate(str) {
// // //      str=str.toLowerCase();
// // //      var n =str.search(/[aeiuo]/);
// // //      switch (n){
// // //        case 0: str = str+"way"; break;
// // //        case -1: str = str+"ay"; break;
// // //        default :
// // //          //str= str.substr(n)+str.substr(0,n)+"ay";
// // //          str=str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
// // //        break;
// // //     }
// // //     return str;

// // // }


// // // //   translate("exam")
// // //  console.log(translate("PigLatin"));

// const pig = "pig latin ";             // our string
// let phrase = pig.toLowerCase();             // converts to lower case
// let phraseArray = phrase.split(" ");        // converts phrase to an array
// let finalPhrase = "";  




// function pigLatin(str) {
//     str = str.toLowerCase()
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelIndex = 0;
//     for( word of phrase) {

//         if(vowels.includes(str[0])) {
//             return str + 'ay';
//         }
//         else {
//             for (let char of str) {
//                 if (vowels.includes(char)) {
//                     vowelIndex = str.indexOf(char);
//                     break;
//                 }
//             }
//             return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
//         }
//     }
    

// }




// function parseThroughPhrase(phrase) {
//     return convertedPhrase;
//     };
//     finalPhrase = parseThroughPhrase(phraseArray);    // Calls main function
//     finalPhrase = phraseArray.join(" ");


//     console.log(pigLatin("Pig Latin"));






// console.log(phraseArray);                   // DELETE
// function parseThroughPhrase(phrase) {
// return convertedPhrase;
// };
// finalPhrase = parseThroughPhrase(phraseArray);    // Calls main function
// finalPhrase = phraseArray.join(" ");              // Rejoins final array
// console.log(finalPhrase);                         // Logs final array

function pigLatinWord(word) {
    // Words starting with a vowel (A, E, I, O, U) simply have "way" appended to the end.
    const firstLetter = word[0].toUpperCase();
    if (firstLetter === 'A' || firstLetter === 'E' || firstLetter === 'I' || firstLetter === 'O' || firstLetter === 'U') {
      return word + 'ay';
    }
    
    // moves the first letter of each word to the end of it, then adds 'ay' to the end of the word
    word = word[1] + word.substring(2) + word[0].toLowerCase() + 'ay';
    
    return word;
  }
  
  function pigLatin(str) {
    // Remove any trailing punctuation (only . and ! at the moment)
    const punctuationChar = str[str.length - 1];
    const hasPunctuation = punctuationChar === '.' || punctuationChar === '!';
    if (hasPunctuation) str = str.substring(0, str.length - 1);
    
    // Get separate words and convert individual words to pig latin
    // Then join the pig latin words back in to a single string
    str = str.split(' ').map(pigLatinWord).join(' ');
    
    // Upper case first letter of sentence
    str = str[0].toUpperCase() + str.substring(1);
    
    // Re-add punctuation if it was removed
    if (hasPunctuation) str += punctuationChar;
    
    return str;
  }

  console.log(pigLatin('Exam Hurray'))