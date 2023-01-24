var questions = [
       {
        question: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "alerts", 
    },
    {
        question: "The condition in an if/else statement is enclosed within ______.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options:["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugginf for printing content to the debugger is ______.",
        options: ["Javascript", "terminal/bash", "for loops", "console log"],
        answer: "console log",
    }
];

var start = document.querySelector('#start');
var introSection = document.querySelector('.intro-section')
var questionSection = document.querySelector('.question-section');
var questionTitle = document.querySelector('#question-title');
var optionOne = document.querySelector('#opt1');
var optionTwo = document.querySelector('#opt2');
var optionThree = document.querySelector('#opt3');
var optionFour = document.querySelector('#opt4');
var options = document.querySelector(".options");
var timer = document.querySelector('#timer');
var initialsSection = document.querySelector('.initials-section');
var resultSection = document.querySelector('.result-section');
var submit = document.getElementById("submit");
var goBack = document.getElementById('go-back');
// var clearHighscores = getElementById('clear-highscores');
var timerInterval;
var clearHighscores;
var index = 0;
var time = 60;

//When use clicks on start, the challenge begins, and timer starts
start.addEventListener("click", startButton);

function startButton() {
//hide intro and last 2 sections
introSection.classList.add('hide');
questionSection.classList.remove('hide');
runQuestions();
startTime();
}

function runQuestions() {
questionTitle.textContent = questions[index].question;
optionOne.textContent = questions[index].options[0];
optionTwo.textContent = questions[index].options[1];
optionThree.textContent = questions[index].options[2];
optionFour.textContent = questions[index].options[3];
}

options.addEventListener('click', function(event) {
    var chosen = event.target.textContent;
    console.log(chosen);
    console.log(questions[index].answer);
if(options == questions[index].answer) {
    console.log("correct");
    }else {
       time = time - 10;
       console.log("wrong")
    }
    showNext()
})

function showNext() {
    index++
    if (index >= questions.length) {
        endGame();
        return;
    }
    runQuestions();
}

function startTime() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      time--;
      timer.textContent = time + " seconds left";
  
      if(time <= 0) {
        // Stops execution of action at set interval
        // Calls function to create and append image
        
        endGame();
      }
    }, 1000);
}

function sendMessage() {
 timer.textContent = "Time is up!"
}

// when timer runs out
// when last question is answered
function endGame() {
    sendMessage();
    questionSection.classList.add('hide');
    initialsSection.classList.remove('hide');
    score = time ;
    console.log(score);
    clearInterval(timerInterval);
}

var userInput = document.getElementById("input");
var score = 0
submit.addEventListener("click", function () {
    // initialSection.classList.add('hide');
    // highScores.classList.remove('hide');
    var initials = userInput.value;
    
    console.log(initials);
    score = time;

    localStorage.setItem(initials, score);
    // probably will be in a for loop
    showHighScores();
})

// Display HighScores
function showHighScores() {
    
    var highScores = localStorage.getItem("","");
    var finalScore = document.getElementById("finalscore");
    var listEl = document.createElement("li");
    resultSection.classList.remove('hide');
    initialsSection.classList.add('hide');
    listEl.textContent = highScores;
    finalScore.append(listEl);
    console.log(highScores);
}




// Add event listener - Go back will go to first page
goBack.addEventListener("click", function () {
    introSection.classList.remove('hide');
    resultSection.classList.add('hide');
})

// Add event listener - Clear highscores will clear local storage
clearHighscores.addEventListener("click", function() {
    var clearHighscores = localStorage.clear();
    clearHighscores.textContent('');
})    


// When click on an option, next question is loaded and either wrong or correct appears on bottom and if incorrect, time is deducted from timer 
    // compare answer selected with correct answer
    // if incorrect, 10 seconds is penalty
    // correct or wrong is displayed on bottom of screen

// After end of questions, All done, your final is ...
    // textbox to enter initials
    




// timer
// Create quiz container
// var header = document.querySelector("#header");
// var container = document.querySelector(".container");
// var divider = document.querySelector(".divider");
// var result = document.querySelector(".result");
// var scores = [];
// Create click event for Highscores
// Create click event for quiz
// Results > display 
// Create local storage, add results
// Add results to highscore
// When game is over, save initials and my score
// End quiz

// var container
// var result

// Create quiz questions