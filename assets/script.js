//declares entire quiz container
var quiz = document.querySelector('#quiz');
//declares where questions will be placed
var questionPlace = document.querySelector('#question-prompt')
// delcares the time variable
var timeBtn = document.querySelector('#time')
// declares landing page title "The Ultimate Car Quiz"
var landingTitle = document.querySelector('#first-page-title')
// delcares landing page introduction
var firstWelcome = document.querySelector('#first-page-welcome')
// declares where rules are at on the landing page
var rulesDesc = document.querySelector('#rules')
//declares where feeback will be injected onto the page
var feedback = document.querySelector('#feedback')
// declares where are score will be displayed at the end of the quiz
var scoreEnd = document.querySelector('#scoreEnd')
//
var highScores = document.querySelector('#leaderboard')
//
var firstpage = document.querySelector('#first-page')
//
var scoreListText = document.querySelector('#scoreList')



// identifies the start quiz button
var startBtn = document.querySelector("#start-quiz");
// declares button for the first anwser
var anw1 = document.querySelector('#anwBtn-1')
// declares button for the seconds anwser
var anw2 = document.querySelector('#anwBtn-2')
// declares button for the third anwser
var anw3 = document.querySelector('#anwBtn-3')
// declares button for the fourth anwser
var anw4 = document.querySelector('#anwBtn-4')
// declares button for the scoreboard
var scoreboardButton = document.querySelector('#scoreboard-button')
//
var resultSubmit = document.querySelector('#results') 
// declares back button
var goBack = document.querySelector('#goBack')
// declares scoreboard button
var viewScore = document.querySelector('#scoreboard-button')




// var declaring the inital value of time
var timescore = 75;
// var declaring i in global scope
var i = 0;
// declaring our score value
var score = timescore;
// declaring array of scores
var scoreList = [];

var score;

// declares our questions, anwser choices, and anwsers
var questions = [
 {
     Question: "Which animal features in the logo for the Lamborghini?",
      answers: ["Horse","Jaguar","Bull", "Girrafe" ],
     correctAnswer: "Bull"
    }, {
        Question: "What was the original color for all Ferrari Models?",
        answers: ["Red", "White","Black", "Yellow" ],
        correctAnswer: "Red"
    }, {
        Question: "Which iconic car manufacturer also made airplane engines?",
        answers: ["Dodge","Rolls Royce", "Mclaren", "Porshce"],
        correctAnswer: "Rolls Royce"
    }, {
        Question: "What is the world's all-time best selling car?",
        answers: ["Toyota Camry", "Honda Civic", "Toyoa Corolla", "Ford F-150" ],
        correctAnswer: "Toyota Corolla"
    }, {
        Question: "How much horse power did the first Porsche 911 have?",
        answers: ["90 HP", "130 HP", "35 HP", "190 HP"],
        correctAnswer: "130" 
    }, {
        Question: "What is generally considered to be the first pony car?",
        answers: ["Mecurry Cougar", "Ford Mustang", "Cheverolet Camaro", "Pontiac Firebird"],
        correctAnswer: "Ford Mustang"
    }, {
        Question: "What was the first Japanese car to be produced in the United States?",
        answers: ["Nissan Maxima","Mazda Miata","Toyota Camry","Honda Accord"],
        correctAnswer: 'Honda Accord' 
    }, {
        Question: "What was the first car launched into space?",
        answers: ["Rinspeed Oasis","Porshce 911","Tesla Roadster", "Rolls Royce vision 100"],
        correctAnswer: "Tesla Roadster" 
    }, ]


timeBtn.textContent = "Time: " + timescore + "s"


function startgame (event) {
    landingTitle.textContent = "";
    firstWelcome.textContent = "";
    rulesDesc.textContent = "";
    startBtn.parentNode.remove(); 
    timer(); 
    quizQuestions();

    
};

function timer() {
    let timerInterval = setInterval(function () {
        timescore--;
        timeBtn.textContent = `Time:${timescore}s`;

        if (timescore === 0 || i === questions.length) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}



function leaderboards(event) {
    event.preventDefault();

    quiz.style.display  = "none"
    firstpage.style.display = "none"
    gameEnd.style.display = "none"
    highScores.style.display = "block"


    
   var initialsUser = document.getElementById('initialinput').value;
   scoreList.push({initialsUser, score: score}) 
   
   scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });

        scoreListText.textContent="";
 

    for (var i = 0; i < scoreList.length; i++) {
        var listScores = document.createElement("li");
        listScores.textContent = scoreList[i].initialsUser + ":" + scoreList[i].score;
        scoreListText.appendChild(listScores)
    
    }

    localStorage.setItem("scoreList", JSON.stringify(scoreList));
var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));
    if (storedScoreList !== null) {
        scoreList += storedScoreList;
    }
  
}






function quizQuestions(){
    quiz.style.display = "block";
    
    if (i < questions.length ) {
        questionPlace.textContent = questions[i].Question;
        anw1.textContent = questions[i].answers[0];
        anw2.textContent = questions[i].answers[1];
        anw3.textContent = questions[i].answers[2];
        anw4.textContent = questions[i].answers[3];
    }
}
 

function checkAnwser(event) {

        setTimeout(function(){
            feedback.textContent = '';
        }, 1000);

        if(event === questions[i].correctAnswer  ) {
            feedback.textContent = "Correct!"
        } else if (event === questions[i].correctAnswer) {
            feedback.textContent = "Correct!"
    } else if (event === questions[i].correctAnswer) {
            feedback.textContent = "Correct!"
    } else if (event === questions[i].correctAnswer) {
            feedback.textContent = "Correct!"
    } else if (i == 7) {
        gameOver();
    } else {
        feedback.textContent = "Wrong!"
        timescore = timescore - 7;
        
    }
        i++;
        quizQuestions();
}


function gameOver() {
        quiz.style.display = "none";
        gameEnd.style.display ="block";
        scoreEnd.textContent = "Your score is: " + timescore;
        score = timescore
}

  

// scoreboardButton.addEventListener('click', score)



startBtn.addEventListener('click', startgame); 

// adds event listner for first anwser button
anw1.addEventListener("click", function (event) {
  var event = event.target;
  checkAnwser(event.textContent.trim());
});
// adds event listner for second anwser button
anw2.addEventListener("click", function (event) {
  var event = event.target;
  checkAnwser(event.textContent.trim());
});
// adds event listner for third anwser button
anw3.addEventListener("click", function (event) {
  var event = event.target;
  checkAnwser(event.textContent.trim());
});
// adds event listner for fourth anwser button
anw4.addEventListener("click", function (event) {
  var event = event.target;
  checkAnwser(event.textContent.trim());
});
resultSubmit.addEventListener('click', leaderboards);

goBack.addEventListener('click', function(){
    location.reload();

})
viewScore.addEventListener('click', leaderboards)