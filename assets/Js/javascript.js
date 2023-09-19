// when we lock the start button a timer starts counting=done
// once we answer a quesiton we are present with other questions
// when answer incorreclty  time is subtracted from timer
// all question are answered or the timer reaches 0
// game is over when all questions are answered or the timer reaches 0
// i can save intitials and my score 
// need to add a score counter

var timerElement = document.querySelector("#timer");
var startQuizButton = document.querySelector("#start-quiz");


function startQuiz() {
  var timeLeft = 20; 

  startQuizButton.disabled = true; 
  timerInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.textContent = timeLeft; 
    } else {
      clearInterval(timerInterval); 
      timerElement.textContent = "Time's up!";
      startQuizButton.disabled = false;
      
    }
  }, 1000); // Update the timer every 1 second
}


document.addEventListener("DOMContentLoaded", function () {
  let questions = [
    {
      question: "What is HTML?",
      answers: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hyperlink Text Makeup Language"],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "What is CSS?",
      answers: ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style System", "Colorful Style Sheet"],
      correctAnswer: "Cascading Style Sheet",
    },
    {
      question: "Which of these options does NOT require the use of parentheses?",
      answers: ["A. Console.log", "B. Prompt", "C. Alert ", "D.innerHTML"],
      correctAnswer: "D. innerHTML",
    },
    {
      question: "What is JavaScript?",
      answers: ["A programming language", "A markup language", "A database language", "A styling language"],
      correctAnswer: "A programming language",
    },
    {
      question: "JavaScript uses what kind of interface to access the DOM?",
      answers: ["A. CSS", "B. An API", "C.HTML", "D. Nothing else"],
      correctAnswer: "B. An API",
    },
    {
      question: "Which of these is not valid(Hit pay attention to if the method should return on thin, or many things?",
      answers: ["A. document.getElementsBYTagName(tagName)", "B. document.getElementsByClassName(className)", "C. document.getElementsByid(idName)", "D. styling language"],
      correctAnswer: "C. document.getElementsByid(idName) ",
    },
    {
      question: "Which of the following is not a valid method rfor generating output to the screen?",
      answers: ["A. doument.wite", "B. Print", "C. Alert", "D. Prompt"],
      correctAnswer: "B. Print",
    },
  ];
    let currentQuestionIndex = 0;
    let scores = 0;
  
    let questionElement = document.getElementById("question");
    let answerButtons = document.querySelectorAll(".btn");
    let nextButton = document.getElementById("next-btn");
    let scoresElement = document.getElementById("scores");
  
    function startGame() {
      currentQuestionIndex = 0;
      points = 0;
      nextButton.style.display = "none";
      setNextQuestion();
    }
  
    function setNextQuestion() {
      resetState();
      showQuestion(questions[currentQuestionIndex]);
    }
  
    function showQuestion(question) {
      questionElement.innerText = question.question;
      question.answers.forEach((answer, index) => {
        answerButtons[index].innerText = answer;
        answerButtons[index].addEventListener("click", selectAnswer);
      });
    }
  
    function resetState() {
      answerButtons.forEach((button) => {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
        button.removeEventListener("click", selectAnswer);
      });
    }
  
    function selectAnswer(event) {
      let selectedButton = event.target;
      let correct = questions[currentQuestionIndex].correctAnswer === selectedButton.innerText;
  
      if (correct) {
        selectedButton.classList.add("correct");
        scores++;
        scoresElement.innerText = scores;
      } else {
        selectedButton.classList.add("incorrect");

        // You can implement a penalty or deduct points here if needed.
      }
  
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        nextButton.style.display = "block";
      } else {
        // The quiz is over
        // You can implement what happens when the quiz is finished here.
      }
    }
  
    nextButton.addEventListener("click", setNextQuestion);
  
    // Start the game
    startGame();
  });