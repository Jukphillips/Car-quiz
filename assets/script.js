var startBtn = document.querySelector("#start-quiz");
var timeBtn = document.querySelector('#time');
var landingTitle = document.querySelector('#first-page-title')
var firstWelcome = document.querySelector('#first-page-welcome')
var rulesDesc = document.querySelector('#rules')
var timeScore = 100;
var Questions

timeBtn.textContent = "Time: " + timeScore;



var startgame = function(event){
    event.preventDefault();
    landingTitle.textContent = "";
    firstWelcome.textContent = "";
    rulesDesc.textContent = "";
    startBtn.parentNode.remove();

    



}





startBtn.addEventListener('click', startgame); 