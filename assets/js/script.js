// Quiz questions and answers
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within ______.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store ______.",
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is ______.",
    options: ["Javascript", "terminal/bash", "for loops", "console log"],
    answer: "console log",
  },
];

var start = document.querySelector("#start");
var highScoreLink = document.querySelector(".highscore-link");
var introSection = document.querySelector(".intro-section");
var questionSection = document.querySelector(".question-section");
var questionTitle = document.querySelector("#question-title");
var optionOne = document.querySelector("#opt1");
var optionTwo = document.querySelector("#opt2");
var optionThree = document.querySelector("#opt3");
var optionFour = document.querySelector("#opt4");
var options = document.querySelector(".options");
var timer = document.querySelector("#timer");
var initialsSection = document.querySelector(".initials-section");
var resultSection = document.querySelector(".result-section");
var submit = document.getElementById("submit");
var goBack = document.getElementById("go-back");
var allHighscores = document.getElementById("all-scores");
var clearHighscores = document.getElementById("clear-highscores");
var finalScore = document.getElementById("finalscore");
var userInput = document.getElementById("input");
var score = 0;
var timerInterval;
var index = 0;
var time = 60;
var initials;

//When use clicks on start, the challenge begins, and timer starts
start.addEventListener("click", startButton);

function startButton() {
  //hide intro and last 2 sections
  introSection.classList.add("hide");
  questionSection.classList.remove("hide");
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

// Function for answer choices. If wrong, time is deducted.
options.addEventListener("click", function (event) {
  var chosen = event.target.textContent;
  if (options == questions[index].answer) {
  } else {
    time = time - 10;
  }
  showNext();
});

// Function to process through questions
function showNext() {
  index++;
  if (index >= questions.length) {
    endGame();
    return;
  }
  runQuestions();
}

function startTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    time--;
    timer.textContent = time + " seconds left";
    // Stops execution of action at set interval
    if (time <= 0) {
      // Calls function to create and append image
      endGame();
    }
  }, 1000);
}

// End game When timer runs out or when last question is answered
function sendMessage() {
  timer.textContent = "Time is up!";
}

function endGame() {
  sendMessage();
  questionSection.classList.add("hide");
  initialsSection.classList.remove("hide");
  score = time;
  console.log(score);
  clearInterval(timerInterval);
}

submit.addEventListener("click", function () {
  initialsSection.classList.add("hide");
  resultSection.classList.remove("hide");
  const initials = document.querySelector("#input").value;
  // initials = userInput.value;

  console.log(initials);
  score = time;
  finalScore.textContent = `Initials: ${initials}  Score: ${score}`;
  var storedScore = JSON.parse(localStorage.getItem("highScores")) || [];
  var userHighscore = {
    user: initials,
    score: score,
  };
  storedScore.push(userHighscore);
  localStorage.setItem("highScores", JSON.stringify(storedScore));
  showHighScores();
});

// Display HighScores
function showHighScores() {
  var allHighscores = document.getElementById("all-scores");
  var storedInitials = JSON.parse(localStorage.getItem("highScores"));
  for (let index = 0; index < storedInitials.length; index++) {
    var element = storedInitials[index];
    var li = document.createElement("li");
    li.textContent = `Initials: ${element.user}  Score: ${element.score}`;
    allHighscores.appendChild(li);
  }
}

// Add event listener - Go back will go to first page
goBack.addEventListener("click", function () {
  introSection.classList.remove("hide");
  resultSection.classList.add("hide");
  index = 0;
  time = 60;
});

// Add event listener - Clear highscores will clear local storage
clearHighscores.addEventListener("click", function () {
  localStorage.clear();
  allHighscores.remove();
  finalScore.remove();
});

// Highscores Link will will go back to the show highscores page
highScoreLink.addEventListener("click", function () {
  resultSection.classList.remove("hide");
  questionSection.classList.add("hide");
  showHighScores();
});
