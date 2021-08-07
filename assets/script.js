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

// var declaring the inital value of time
var timescore = 70;
// var declaring question count
var questionCount = 0;


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
    console.log(questions[1].Question)
    console.log(questions[1].answers[0])
    



timeBtn.textContent = "Time: " + timescore


function startgame (event) {
    landingTitle.textContent = "";
    firstWelcome.textContent = "";
    rulesDesc.textContent = "";
    startBtn.parentNode.remove();  
    quizQuestions();

    
};


function score(scoreevent) {

    landingTitle.textContent = "";
    firstWelcome.textContent = "";
    rulesDesc.textContent = "";
    startBtn.parentNode.remove();

}
var leaderboards = function(scoreevent) {

}

var test = document.getElementById("test")
function quizQuestions(){
    quiz.style.display = "block";
    var i = 0;
    if (questionCount < questions.length ) {
        questionPlace.textContent = questions[i].Question;
        anw1.innerHTML = questions[i].answers[0];
        anw2.textContent = questions[i].answers[1];
        anw3.textContent = questions[i].answers[2];
        anw4.textContent = questions[i].answers[3];


    }



}

console.log(questions[1].Question)



scoreboardButton.addEventListener('click', score)
startBtn.addEventListener('click', startgame); 