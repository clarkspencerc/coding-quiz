var welcomeEl = document.querySelector("#welcome"); 
var quizEl = document.querySelector("#quiz"); 
var timerEl = document.querySelector("#timer"); 
var questions = []

// question bank 

questions = [
    {
        q: "'box-sizing' is a property that changes the calculation of which values of the element?",
        ans: {
            a:"width",
            b:"height",
            c:"margin",
            d:"Both width and height"
        },
        correctAnswer:'d'
    },
    {
        q: "If you need to position a child element in relation to its parent element, which value shoulud you set the position property to?",
        ans: {
            a:"display",
            b:"relative",
            c:"absolute",
            d:"static"
        },
        correctAnswer:'b'
    },
    {
        q: "What is an example of a pseudo-element",
        ans: {
            a:"::before",
            b:"::after",
            c:"::first-letter",
            d:"All of the above"
        },
        correctAnswer:'d'
    },
]

var timeLeft = questions.length * 10 + 10 ; 



// start game 
var startGame = function(){
var h1El = document.createElement("h1"); 
h1El.textContent = "Welcome to The Coding Quiz";
welcomeEl.appendChild(h1El); 

var buttonEl = document.createElement("button"); 
buttonEl.textContent = "Start Quiz"; 
buttonEl.setAttribute("id", "start-quiz");
welcomeEl.appendChild(buttonEl); 
hide('start-quiz','welcome');
displayQuestion(); 
};


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
        clearInterval(setStartEl); 
    }
    else{
        document.getElementById("timer").innerHTML = "Seconds Remaining: " + timeLeft;
    }
    timeLeft -= 1; 
}, 1000);
};

//display question 

var displayQuestion = function(){
   var question = document.createElement("h2"); 
   question.textContent = questions[1].q; 
   quizEl.appendChild(question); 
  

   for(letter in questions[1].ans){
    var answer = document.createElement("button");
    answer.textContent= questions[1].ans[letter];
    // need to set a class that way I can tell which one is correct 
    //answer.setAttribute("class", ans[letter]); 
    console.log(questions[1].ans[letter]); 
    console.log()
    quizEl.appendChild(answer);}


};

// ask question function loops through question bank until it's displayed all of them 

// game-over function -> when timer runs out or all questions have been asked 

// wrong answer function -> subtracts time from timer

// create score 

// input initials with score 

// save score in local date 

// retrive score from local data 

startGame(); 

