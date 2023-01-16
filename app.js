const quizData = [
    {
        "question": "What is the most used programing language in 2019",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "Javascript",
        "correct": "d"
    },
    {
        "question": "What does HTML stand for",
        "a": "Hypertext Murkup Language",
        "b": "Cascading Style Sheet",
        "c": "Json Object Notation",
        "d": "Javascript",
        "correct": "a"
    },
    {
        "question": "What year was Javascript launched",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "1993",
        "correct": "b"
    },
    {
        "question": "What does CSS stand for",
        "a": "Hypertext Murkup Language",
        "b": "Cascading Style Sheet",
        "c": "Json Object Notation",
        "d": "Javascript",
        "correct": "b"
    }
]

const QuizMain = document.querySelector('.quiz-container')
const Question = document.getElementById('question')
const AnswerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const Submit = document.getElementById('submit')

let currentquiz = 0
let score = 0


data()

function data() {
    deselected()

    const quiz = quizData[currentquiz]

    Question.innerText = quiz.question

    a_text.innerText = quiz.a
    b_text.innerText = quiz.b
    c_text.innerText = quiz.c
    d_text.innerText = quiz.d
}

function deselected() {
    AnswerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

function selected() {
    let answer;

    AnswerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


Submit.addEventListener('click', () => {
    let answer = selected()

    if (answer) {
        if (answer === quizData[currentquiz].correct) {
            score++
        }
        currentquiz++
        if (currentquiz < quizData.length) {
            data()
        } else {
            QuizMain.innerHTML =
                `
            <h2>You answered correctly at ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

