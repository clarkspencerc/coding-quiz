var welcomeEl = document.querySelector("#welcome"); 
var quizEl = document.querySelector("#quiz"); 
var timerEl = document.querySelector("#timer"); 
var questions = [];
var score = 0;
var currentQ = 0; 
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
        correctAnswer:'Both width and height'
    },
    {
        q: "If you need to position a child element in relation to its parent element, which value shoulud you set the position property to?",
        ans: {
            a:"display",
            b:"relative",
            c:"absolute",
            d:"static"
        },
        correctAnswer:'relative'
    },
    {
        q: "What is an example of a pseudo-element",
        ans: {
            a:"::before",
            b:"::after",
            c:"::first-letter",
            d:"All of the above"
        },
        correctAnswer:'All of the above'
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

};

var endGame = function(){
    empty(quizEl);
    timeLeft = 0 ; 
    console.log("game has ended. this is your final score " + score);
};

var empty = function(element) {
    element.replaceChildren(); 
};

// hide function 
var hide = function(buttonId, divId){
    document.getElementById(buttonId).onclick = function(){
        document.getElementById(divId).hidden = true
        startTimer(); 
        displayQuestion(); 
    }
};

// start timer function 

var startTimer = function(){
var setStartEl = setInterval(function(){
    if (timeLeft <0){
        endGame(); 
        clearInterval(setStartEl); 
    }
    else{
        document.getElementById("timer").innerHTML = "Seconds Remaining: " + timeLeft;
    }
    timeLeft -= 1; 
}, 1000);
};

var displayQuestion = function(){
   var question = document.createElement("h2"); 
   question.textContent = questions[currentQ].q; 
   question.setAttribute("calss",".question");
   quizEl.appendChild(question); 
  

   for(letter in questions[currentQ].ans){
    var answer = document.createElement("button");
    answer.textContent= questions[currentQ].ans[letter]; 
    answer.setAttribute("calss", ".choices");
    quizEl.appendChild(answer);}


};



quizEl.addEventListener("click", function(event){
    var selectedAnswer = event.target.textContent; 
    var correctOption = questions[currentQ].correctAnswer;
    
    if( selectedAnswer != correctOption){
        timeLeft -= 10; 
        score -= 3; 
         
    }
    else {
        score += 10; 
        
    }
   console.log(score); 
   if (currentQ < questions.length -1 && timeLeft > 0){
       currentQ++;
       empty(quizEl); 
       displayQuestion(); 
   }
   else if ( currentQ = questions.length){
       endGame(); 
   }
   
   
});


// game-over function -> when timer runs out or all questions have been asked 

// wrong answer function -> subtracts time from timer

// create score 

// input initials with score 

// save score in local date 

// retrive score from local data 

startGame(); 

