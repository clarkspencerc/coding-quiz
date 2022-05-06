var welcomeEl = document.querySelector("#welcome"); 
var quizEl = document.querySelector("#quiz"); 
var timerEl = document.querySelector("#timer"); 
var highScoreEl = document.querySelector("#highScore");
var questions = [];
var score = 0;
var currentQ = 0; 
var highScoreArr = [{initials: "", scor: 0}]; 
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
    var alertEl = document.createElement("h3"); 
    alertEl.textContent = "The game has ended. This is your final score " + score;
    highScoreEl.appendChild(alertEl); 

    // load high score values 

    if (score >= highScoreArr[0].scor){

        var newHighScoreEl = document.createElement("h4"); 
        newHighScoreEl.textContent = "You have set a new High Score. Please Enter your Initials below."; 
        highScoreEl.appendChild(newHighScoreEl); 

        var initials = document.createElement("INPUT");
        initials.setAttribute("type", "text");
        initials.setAttribute("value", "Enter Your Initials");
        initials.setAttribute("maxlength", "3");
        highScoreEl.appendChild(initials);

        var submitEl = document.createElement("button");
        submitEl.textContent = "Submit"; 
        submitEl.setAttribute  = ("class", "btn");
        submitEl.setAttribute = ("id", "submitHighScore");
        highScoreEl.appendChild(submitEl); 

        submitEl.addEventListener("click", function(event){
            event.preventDefault(); 
            var submitedInitials = initials.value; 
            console.log(submitedInitials);

            highScoreArr.unshift({initials:submitedInitials, scor: score}); 
            console.log(score); 
            console.log(highScoreArr); 
            // save high score 
            saveScore(highScoreArr); 
            highScoreEl.setAttribute("class","hide");  
            displayScores(); 
        })

        
       
        console.log(highScoreArr);
    }
    else {
        var tryAgainEl = document.createElement("h4"); 
        tryAgainEl.textContent = "You did not set a new highscore, please try again"; 
        // display leader board??? 
    }

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
        
        clearInterval(setStartEl); 
        
        if (currentQ != questions.length){
            endGame();
        } 
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
    currentQ++;
   console.log(score); 
   if (currentQ < questions.length && timeLeft > 0){
       
       empty(quizEl); 
       displayQuestion(); 
   }
   else if ( currentQ = questions.length){
       endGame(); 
   }
   
   
});


// save score in local date 

var saveScore = function(savedArr) {
    localStorage.setItem("highScores", JSON.stringify(savedArr)); 
}; 

// retrive score from local data 

var loadScores = function(){

    var savedScoreArr = localStorage.getItem("highScores");
    savedScoreArr = JSON.parse(savedScoreArr);

    highScoreArr = savedScoreArr;
    
    return highScoreArr; 
}

var displayScores = function(){
    loadScores(); 
//    var savedScoreArr = localStorage.getItem("highScores");
//      savedScoreArr= JSON.parse(savedScoreArr); 

//     highScoreArr = savedScoreArr; 
//     console.log(highScoreArr); 

    var scoreDiv= document.getElementById("viewHighScores"); 
    var scoreBoard = document.createElement("div"); 
    scoreBoard.classList.add("scores"); 
    scoreDiv.appendChild(scoreBoard); 

    var scoreBoardHeader = document.createElement("h2");
    scoreBoardHeader.innerText = "High Scores"; 
    scoreBoardHeader.classList.add("title"); 
    scoreBoard.appendChild(scoreBoardHeader); 

    for(i = 0; i < highScoreArr.length -1 ; i++){

        // div for card 
        var cardsEl = document.createElement("div"); 
        
        // element for name 
        var nameEl = document.createElement("h3"); 
        nameEl.innerText = highScoreArr[i].initials;
        cardsEl.appendChild(nameEl); 


        // element for score 
        var viewHighScoreEl = document.createElement("h4"); 
        viewHighScoreEl.innerText = highScoreArr[i].scor; 
        cardsEl.appendChild(viewHighScoreEl); 

        scoreBoard.appendChild(cardsEl); 
    }
    

};

startGame(); 
loadScores(); 
