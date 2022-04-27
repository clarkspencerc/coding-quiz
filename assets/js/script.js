var pageContentEl = document.querySelector("#page-content"); 


// start game 
//might need to pass in an event and event.preventDefault(): 
var startGame = function(){
var h1El = document.createElement("h1"); 
h1El.textContent = "Welcome to The Coding Quiz";
pageContentEl.appendChild(h1El); 

var buttonEl = document.createElement("button"); 
buttonEl.textContent = "Start Quiz"; 
buttonEl.setAttribute("id", "submit");
pageContentEl.appendChild(buttonEl); 
}

// start timer function 


// question bank 

// ask question function loops through question bank until it's displayed all of them 

// game-over function -> when timer runs out or all questions have been asked 

// wrong answer function -> subtracts time from timer

// create score 

// input initials with score 

// save score in local date 

// retrive score from local data 

startGame(); 