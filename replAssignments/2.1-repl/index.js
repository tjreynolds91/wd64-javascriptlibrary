let url = 'https://rickandmortyapi.com/api/character/';
fetch('https://rickandmortyapi.com/api/character/')
  .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
    
    
      {var r = document.createElement("IMG");
        r.setAttribute("src", 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
        r.setAttribute("width", "150");
        r.setAttribute("height", "150");
        r.setAttribute('class','image1')
        // r.setAttribute("border-radius", "");
        // r.setAttribute("border", "");
        // r.setAttribute("align", "");
        document.body.appendChild(r);
      }
       
      {var m = document.createElement("IMG");
        m.setAttribute("src", 'https://rickandmortyapi.com/api/character/avatar/2.jpeg');
        m.setAttribute("width", "150");
        m.setAttribute("height", "150");
        m.setAttribute('class','image2')
        // m.setAttribute("border-radius", "");
        // m.setAttribute("border", "");
        // m.setAttribute("align", "");
        document.body.appendChild(m);
      }
    })























    var computerGuess = Math.round(Math.random() * 10 + 1);
var guessCount = 3;
console.log(computerGuess);

while (true) {
  var userGuess = parseInt(prompt("Please pick a number between 1 and 10"));
  if (userGuess < 1 || userGuess > 10) {
    alert("Please guess between 1 and 10");
    
  } else {
    
    if (guessCount > 1) {
  
      if (userGuess === computerGuess) {
        alert("Winner winner taco dinner!");
        break;
      } else if (userGuess > computerGuess) {
        guessCount--;
        alert("Please guess lower. You have " + guessCount + " guesses remaining.");
        
      
      } else {
        guessCount--;
        alert("Please guess higher. You have " + guessCount + " guesses remaining.");
    }
  
    } else {
      alert("MUh hahahahah you lose!");
      break;
    }
  } 
}