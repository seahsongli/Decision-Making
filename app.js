const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question: "What operating system would you like?",
    answers: {
      a: "Windows",
      b: "MacOS",
      c: "Linux",
    },
  },
  {
    question: "What is your budget?",
    answers: {
      a: "Hella broke ($500-$1000)",
      b: "Pretty broke ($1001-$1500)",
      c: "Daddy's money ($2000++)",
    },
  },
  {
    question: "Do you need it for Gaming?",
    answers: {
      a: "Yes",
      b: "No",
    },
  },
  {
    question: "Do you have any brand preference?",
    answers: {
      a: "Hp",
      b: "Asus",
      c: "Lenovo",
      d: "Apple",
      e: "No preference",
    },
  },
  {
    question: "Do you need the device to be lightweight?",
    answers: {
      a: "Yes",
      b: "No",
    },
  },
  {
    question: "What screen size would you like?",
    answers: {
      a: 'Small(10.1"- 12.5")',
      b: 'Medium(12.6"- 15.0")',
      c: "Big (>15.0)",
    },
  },
  {
    question: "Would you like the touchscreen feature for laptops?",
    answers: {
      a: "Yes",
      b: "No",
    },
  },
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", sendResults);

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

myQuestions.forEach((currentQuestion, questionNumber) => {
  // the code we want to run for each question goes here
});

// we'll want to store the list of answer choices

function sendResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  let answers = {};

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${answer}`;
}
