// Quiz questions
const quizQuestions = [
    {
      question: "1. Who invented HTML?",
      choices: ["a. Dave Raggett", "b. Tim Berners-Lee", "c. Denis Ritchie", "d. All of the above"],
      correctAnswer: "b. Tim Berners-Lee"
    },
    {
      question: "2. HTML tags with no content are called _____.",
      choices: ["a. Special tags", "b. Advanced tags", "c. Empty tags", "d. Other tags"],
      correctAnswer: "c. Empty tags"
    },
    {
      question: "3. HTML stands for_______.",
      choices: ["a. Hyperactive Text Markup Language", "b. Hyper Text Markup Language", "c. Hyper Text Machine Language", "d. None of these"],
      correctAnswer: "b. Hyper Text Markup Language"
    },
    {
      question: "4. Which HTML attribute is used to define styles of an element?",
      choices: ["a. <style>", "b. <css>", "c. style", "d. css"],
      correctAnswer: "c. style"
    },
    {
      question: "5. Which HTML tag is used to define text with strong importance?",
      choices: ["a. <strong>", "b. <bold>", "c. <bolder>", "d. <b>"],
      correctAnswer: "a. <strong>"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // DOM elements
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const submitButton = document.getElementById('submit-btn');
  const feedbackElement = document.getElementById('feedback');
  const scoreElement = document.getElementById('score-value');
  
  // Function to load the current question
  function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
      const label = document.createElement('label');
      const radioBtn = document.createElement('input');
      radioBtn.type = 'radio';
      radioBtn.name = 'choice';
      radioBtn.value = choice;
      choicesElement.appendChild(radioBtn);
      label.textContent = choice;
      label.insertBefore(radioBtn, label.firstChild);
      choicesElement.appendChild(label);
    });
  }
  
  // Function to check the answer
  function checkAnswer() {
    const userAnswer = document.querySelector('input[name="choice"]:checked');
    if (userAnswer) {
      const selectedAnswer = userAnswer.value;
      const currentQuestion = quizQuestions[currentQuestionIndex];
      if (selectedAnswer === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
      } else {
        feedbackElement.textContent = "Incorrect. The correct answer is: " + currentQuestion.correctAnswer;
      }
      scoreElement.textContent = score;
      currentQuestionIndex++;
      if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
      } else {
        endQuiz();
      }
    } else {
      feedbackElement.textContent = "Please select an answer.";
    }
  }
  
  // Function to end the quiz
  function endQuiz() {
    questionElement.textContent = "Quiz completed!";
    choicesElement.innerHTML = '';
    submitButton.style.display = 'none';
  }
  
  // Event listeners
  window.addEventListener('DOMContentLoaded', loadQuestion);
  submitButton.addEventListener('click', checkAnswer);
  