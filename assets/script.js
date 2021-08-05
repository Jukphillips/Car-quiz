var startBtn = document.querySelector("#start-quiz");
var timeBtn = document.querySelector('#time');
var landingTitle = document.querySelector('#first-page-title')
var firstWelcome = document.querySelector('#first-page-welcome')
var rulesDesc = document.querySelector('#rules')
var timeScore = 70;
var Questions

timeBtn.textContent = "Time: " + timeScore;



var startgame = function(event){
    event.preventDefault();
    landingTitle.textContent = "";
    firstWelcome.textContent = "";
    rulesDesc.textContent = "";
    startBtn.parentNode.remove();
   
    quizQuestions();
}

var quizQuestions = function(event){
 var questions = [
  {
      Question: "Which animal features in the logo for the Lamborghini?",
      answers: {
          a: "Horse",
          b: "Jaguar",
          c: "Bull",
          d: "Girrafe"
      },
    correctAnswer = c
    },
    {
        Question: "What was the original color for all Ferrari Models?",
        answers: {
            a: "Red",
            b: "White",
            c: "Black",
            d: "Yellow"
        },
        correctAnswer = a
    },
    {
        Question: "Which iconic car manufacturer also made airplane engines?",
        answers: {
            a: "Dodge",
            b: "Rolls Royce",
            c: "Mclaren",
            d:  "Porshce"
        },
        correctAnswer = b 
    },
   {
        Question: "What is the world's all-time best selling car?",
        answers: {
            a: "Toyota Camry",
            b: "Honda Civic",
            c: "Toyoa Corolla",
            d:  "Ford F-150"
        },
        correctAnswer = c
    },
    {
        Question: "The japanese car company Toyota was Originally established as a textiles manufacturer. True or false?",
        answers: {
            a: "False",
            b: "True",
        
        },
        correctAnswer = b 
    },
    {
        Question: "What is generally considered to be the first pony car?",
        answers: {
            a: "Mecurry Cougar",
            b: "Ford Mustang",
            c: "Cheverolet Camaro",
            d:  "Pontiac Firebird"
        },
        correctAnswer = b 
    },
    {
        Question: "What was the first Japanese car to be produced in the United States?",
        answers: {
            a: "Nissan Maxima",
            b: "Mazda Miata",
            c: "Toyota Camry",
            d: "Honda Accord"
        },
        correctAnswer = d 
    },
    {
        Question: "What was the first car launched into space?",
        answers: {
            a: "Rinspeed Oasis",
            b: "Porshce 911",
            c: "Tesla Roadster",
            d:  "Rolls Royce vision 100"
        },
        correctAnswer = b 
    },


 ]



}



startBtn.addEventListener('click', startgame); 