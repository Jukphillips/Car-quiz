//declares entire quiz container
var quiz = document.querySelector('#quiz');
//declares where questions will be placed
var questionPlace = document.querySelector('#question-prompt')
// declares button for the first anwser
var anw1 = document.querySelector('#anwBtn-1')
// declares button for the seconds anwser
var anw2 = document.querySelector('#anwBtn-2')
// declares button for the third anwser
var anw3 = document.querySelector('#anwBtn-3')
// declares button for the fourth anwser
var anw4 = document.querySelector('#anwBtn-4')


// identifies the start quiz button
var startBtn = document.querySelector("#start-quiz");
var timeBtn = document.querySelector('#time')
var scoreboardButton = document.querySelector('#scoreboard-button') 
var landingTitle = document.querySelector('#first-page-title')
var firstWelcome = document.querySelector('#first-page-welcome')
var rulesDesc = document.querySelector('#rules')

var timescore = 70;




timeBtn.textContent = "Time: " + timescore


var startgame = function(event){
    event.preventDefault();
    landingTitle.textContent = "";
    firstWelcome.textContent = "";
    rulesDesc.textContent = "";
    startBtn.parentNode.remove();
    
    quizQuestions();

    
}


var score = function(scoreevent) {
    scoreevent.preventDefault();
    landingTitle.textContent = "";
    firstWelcome.textContent = "";
    rulesDesc.textContent = "";
    startBtn.parentNode.remove();

}
var leaderboards = function(scoreevent) {

}

var quizQuestions = function(event){
    var questions = [
 {
     Question: "Which animal features in the logo for the Lamborghini?",
      answers: ["1.Horse","2.Jaguar","3.Bull", "4.Girrafe" ],
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
        answers: {a: "Nissan Maxima", b: "Mazda Miata", c: "Toyota Camry", d: "Honda Accord"},
        correctAnswer: 'Honda Accord' 
    }, {
        Question: "What was the first car launched into space?",
        answers: {a: "Rinspeed Oasis", b: "Porshce 911", c: "Tesla Roadster", d:  "Rolls Royce vision 100"},
        correctAnswer: "Tesla Roadster" 
    }, ]
    console.log(questions[1].Question)
    console.log(questions[1].answers.length)
    
    for( var i= 0; i < questions.length; ) {
        
    }

}





scoreboardButton.addEventListener('click', score)
startBtn.addEventListener('click', startgame); 