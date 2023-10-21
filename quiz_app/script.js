const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'What is 20/5?',
    answers: [
      { text: '205', correct: false },
      { text: '20', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: 'What is the JavaScript programming language used for?',
    answers: [
      { text: 'Creating web applications', correct: true },
      { text: 'Cooking recipes', correct: false },
      { text: 'Navigating the internet', correct: false },
      { text: 'Solving complex math problems', correct: false }
    ]
  },
  {
    question: 'What is the primary purpose of JavaScript?',
    answers: [
      { text: 'Styling web pages', correct: false },
      { text: 'Providing server security', correct: false },
      { text: 'Enhancing the user interface', correct: true },
      { text: 'Sending emails', correct: false }
    ]
  },
  {
    question: 'How do you declare a variable in JavaScript?',
    answers: [
      { text: 'var', correct: false },
      { text: 'let', correct: true },
      { text: 'const', correct: false }
    ]
  },
  {
    question: 'Which operator is used for equality comparison in JavaScript?',
    answers: [
      { text: '==', correct: false },
      { text: '===', correct: true },
      { text: '=', correct: false },
      { text: '!=', correct: false }
    ]
  },
  {
    question: 'What is the result of "5" + 2 in JavaScript?',
    answers: [
      { text: '7', correct: true },
      { text: '52', correct: false },
      { text: '72', correct: false },
      { text: 'NaN', correct: false }
    ]
  },
  {
    question: 'How can you comment a single line in JavaScript?',
    answers: [
      { text: '// This is a comment', correct: true },
      { text: '/* This is a comment */', correct: false },
      { text: '# This is a comment', correct: false },
      { text: '-- This is a comment', correct: false }
    ]
  },
  {
    question: 'What is the purpose of the JavaScript "alert" function?',
    answers: [
      { text: 'Display a message in the console', correct: false },
      { text: 'Show a popup message to the user', correct: true },
      { text: 'Pause the script execution', correct: false },
      { text: 'Define a function', correct: false }
    ]
  },
  {
    question: 'Which function is used to convert a string to an integer in JavaScript?',
    answers: [
      { text: 'parseInt()', correct: true },
      { text: 'stringToInt()', correct: false },
      { text: 'toInteger()', correct: false },
      { text: 'convertToInt()', correct: false }
    ]
  },
  {
    question: 'What does the "null" value represent in JavaScript?',
    answers: [
      { text: 'An empty string', correct: false },
      { text: 'A missing value', correct: true },
      { text: 'Zero', correct: false },
      { text: 'Infinity', correct: false }
    ]
  },
  {
    question: 'Which statement is used to exit a loop in JavaScript?',
    answers: [
      { text: 'break', correct: true },
      { text: 'return', correct: false },
      { text: 'continue', correct: false },
      { text: 'exit', correct: false }
    ]
  },
  {
    question: 'What is the "NaN" value in JavaScript?',
    answers: [
      { text: 'Not a Number', correct: true },
      { text: 'Negative Number', correct: false },
      { text: 'Null', correct: false },
      { text: 'No Action Needed', correct: false }
    ]
  },
  {
    question: 'What is the purpose of the JavaScript "prompt" function?',
    answers: [
      { text: 'Print text to the console', correct: false },
      { text: 'Accept user input through a dialog box', correct: true },
      { text: 'Send an AJAX request', correct: false },
      { text: 'Create an alert message', correct: false }
    ]
  },
  {
    question: 'What is the output of 5 > 3 in JavaScript?',
    answers: [
      { text: 'true', correct: true },
      { text: 'false', correct: false },
      { text: 'undefined', correct: false },
      { text: 'null', correct: false }
    ]
  },
  {
    question: 'How do you add a comment block in JavaScript?',
    answers: [
      { text: '/* This is a comment */', correct: true },
      { text: '// This is a comment', correct: false },
      { text: '# This is a comment', correct: false },
      { text: '-- This is a comment', correct: false }
    ]
  },
  {
    question: 'Which function is used to find the length of a string in JavaScript?',
    answers: [
      { text: 'len()', correct: false },
      { text: 'length()', correct: true },
      { text: 'count()', correct: false },
      { text: 'size()', correct: false }
    ]
  },
  // Add more questions here...
  {
    question: 'What is a closure in JavaScript?',
    answers: [
      { text: 'A function that has no parameters', correct: false },
      { text: 'A variable that can be accessed outside its scope', correct: false },
      { text: 'A function that has access to its parent function\'s variables', correct: true },
      { text: 'A built-in JavaScript object', correct: false }
    ]
  },
  {
    question: 'What does the "typeof" operator return for arrays in JavaScript?',
    answers: [
      { text: 'array', correct: false },
      { text: 'object', correct: true },
      { text: 'typeof', correct: false },
      { text: 'array', correct: false }
    ]
  },
  {
    question: 'How do you define a function in JavaScript?',
    answers: [
      { text: 'func', correct: false },
      { text: 'def', correct: false },
      { text: 'function', correct: true },
      { text: 'define', correct: false }
    ]
  },
  {
    question: 'What is the purpose of the JavaScript "push" method for arrays?',
    answers: [
      { text: 'Remove an element from the array', correct: false },
      { text: 'Add an element to the beginning of the array', correct: false },
      { text: 'Add an element to the end of the array', correct: true },
      { text: 'Sort the array', correct: false }
    ]
  },
  {
    question: 'What is the "event loop" in JavaScript?',
    answers: [
      { text: 'A loop that prints events to the console', correct: false },
      { text: 'A mechanism for handling asynchronous operations', correct: true },
      { text: 'A loop that iterates over events in an array', correct: false },
      { text: 'A loop that waits for user input', correct: false }
    ]
  },
  {
    question: 'Which method is used to remove the last element from an array in JavaScript?',
    answers: [
      { text: 'pop()', correct: true },
      { text: 'shift()', correct: false },
      { text: 'push()', correct: false },
      { text: 'unshift()', correct: false }
    ]
  },
  {
    question: 'What is the purpose of the JavaScript "slice" method for arrays?',
    answers: [
      { text: 'Splice the array into two parts', correct: false },
      { text: 'Copy a portion of the array to a new array', correct: true },
      { text: 'Remove the last element from the array', correct: false },
      { text: 'Add an element to the beginning of the array', correct: false }
    ]
  },
  {
    question: 'How can you access the first element of an array in JavaScript?',
    answers: [
      { text: 'array.first', correct: false },
      { text: 'array[0]', correct: true },
      { text: 'array.first()', correct: false },
      { text: 'array.getElement(1)', correct: false }
    ]
  },
  {
    question: 'What is a "callback function" in JavaScript?',
    answers: [
      { text: 'A function that calls another function', correct: false },
      { text: 'A function that is passed as an argument to another function and is executed later', correct: true },
      { text: 'A built-in JavaScript function', correct: false },
      { text: 'A function that has no return statement', correct: false }
    ]
  },
  {
    question: 'What is the purpose of the "document.getElementById" method in JavaScript?',
    answers: [
      { text: 'Retrieve an element by its class name', correct: false },
      { text: 'Retrieve an element by its tag name', correct: false },
      { text: 'Retrieve an element by its ID', correct: true },
      { text: 'Retrieve an element by its data attribute', correct: false }
    ]
  }
];