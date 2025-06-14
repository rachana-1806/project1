const quizData = [
  {
    question: "What is the capital of India?",
    choices: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: 1
  },
  {
    question: "Who is the father of C Language?",
    choices: ["Bjarne Stroustrup", "Steve Jobs", "Dennis Ritchie", "James Gosling"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Saturn", "Mars", "Jupiter"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.onclick = () => selectAnswer(index);
    choicesEl.appendChild(li);
  });
}

function selectAnswer(index) {
  const q = quizData[currentQuestion];
  if (index === q.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${quizData.length}`;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

loadQuestion();
