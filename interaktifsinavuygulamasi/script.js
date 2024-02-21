const questions = [
    {
        question: 'What is the capital of France?',
        choices: ['Paris', 'London', 'Rome', 'Berlin'],
        answer: 0
    },
    {
        question: 'Which planet is closest to the sun?',
        choices: ['Mercury', 'Venus', 'Earth', 'Mars'],
        answer: 0
    },
    
];

let currentQuestion = 0;

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').innerText = q.question;
    document.getElementById('choices').innerHTML = '';
    q.choices.forEach((choice, index) => {
        const choiceElement = document.createElement('button');
        choiceElement.innerText = choice;
        choiceElement.onclick = () => {
            if (index === q.answer) {
                alert('Correct!');
            } else {
                alert('Incorrect.');
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                alert('Quiz completed!');
            }
        };
        document.getElementById('choices').appendChild(choiceElement);
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        alert('Quiz completed!');
    }
}

showQuestion();
