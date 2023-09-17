
let questOne = document.querySelectorAll('.questOne');
let questTwo = document.querySelectorAll('.questTwo');
let questthee = document.querySelectorAll('.questthee');
let questfour = document.querySelectorAll('.questfour');
let questfive = document.querySelectorAll('.questfive');

function startTest() {
    let quizTest = confirm("Lets play a quiz Game!")
    if (quizTest === true) {
        location.reload();
    } else {
        alert("Why are you leaving this page?")
    }
}

let questions = [ {
    questOne: "What is the capital of France?",
    answer: [
        { Text: "Paris" },
        { Text: "Toulouse" },
        { Text: "Strasbourg" },
        { Text: "Nantes" }
        
    ]
}];

let questionElement = document.querySelector('.question');
let buttoncontainer = document.querySelector('.answerBtn');

let questionIndex = 0;

function nextQuestion() {
    if (questionIndex < questions.length) {
        questionElement.textContent = questions[questionIndex].questOne;
        buttoncontainer.innerHTML = "";
        for (let i = 0; i < questions[questionIndex].answer.length; i++) {
            let button = document.createElement('button');
            button.textContent = questions[questionIndex].answer[i].Text;
            button.setAttribute('class', 'btn btn-primary');
            buttoncontainer.appendChild(button);
        }
        questionIndex++;
    } else {
        location.reload();
    }
}
var startButton = document.querySelector("#start");
var timerEL = document.querySelector("#timer");

var startButton = document.querySelector("#start");
var timerEL = document.querySelector("#timer");

letbtn = document,getEkenebtbyid('btn');
var myTimer;
var timerRunning = false;

BigInt.addEventListener("click",function(){
    if (timerRunning) {
    clearInterval(timerEL);
    timerRunning = false;
    BigInt.textContent = "start"; 
    }else {
        timerRunning = true;
        BigInt.textContent = "stop";
        CSSLayerBlockRule();
    }
});

function clock() {
    var c = 0;
    function myClock() {
        timerEL.textContent = Timer; " + c"
        c++;
}
    myTimer = setInterval(myClock, 1000);
}