var quizEl = document.querySelector("#quiz"); 
var timerEl = document.querySelector("#timer"); 
var questions = []
var timeLeft = questions.length * 10 + 10 ; 



// start game 
//might need to pass in an event and event.preventDefault(): 
var startGame = function(){
var h1El = document.createElement("h1"); 
h1El.textContent = "Welcome to The Coding Quiz";
quizEl.appendChild(h1El); 

var buttonEl = document.createElement("button"); 
buttonEl.textContent = "Start Quiz"; 
buttonEl.setAttribute("id", "start-quiz");
quizEl.appendChild(buttonEl); 
hide('start-quiz','quiz');

}


// hide function 
var hide = function(buttonId, divId){
    document.getElementById(buttonId).onclick = function(){
        document.getElementById(divId).hidden = true
    }
};

// start timer function 

var startTimer = function(){
var setStartEl = setInterval(function(){
    if (timeLeft <0){
        clearInterval(setStart); 
    }
    else{
        document.getElementById("timer").innerHTML = "Seconds Remaining: " + timeLeft;
    }
    timeLeft -= 1; 
}, 1000);
timerEl.appendChild(setStartEl); 
};


// question bank 

// ask question function loops through question bank until it's displayed all of them 

// game-over function -> when timer runs out or all questions have been asked 

// wrong answer function -> subtracts time from timer

// create score 

// input initials with score 

// save score in local date 

// retrive score from local data 

startGame(); 
