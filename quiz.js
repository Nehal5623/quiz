var quizdata =[
    {
        question:'Who amongst the following had called Rabindranath Tagore as THR GREAT SENTINEL?',
        a: 'Abul Kalam Azad',
        b:'Mahatma Gandhi',
        c: 'Dr. Rajendra Prasad',
        d:'Dr. Rajendra Prasad',
        correct: 'b'

    },
    {
        question:"Grand Central Terminal, Park Avenue, New York is the world's",
        a: 'highest railway station',
        b:'longest railway station',
        c: 'largest railway station',
        d:'None of the above',
        correct:'c'

    },
    {
        question:'Entomology is the science that studies',
        a: 'Insects',
        b:'Behaviour of human beings',
        c: 'The formation of rocks',
        d:'The origin and history of technical and scientific terms',
        correct:'a'

    },
    {
        question:'FFC stands for',
        a:'Federation of Football Council',
        b:'Film Finance Corporation',
        c: 'Foreign Finance Corporation',
        d:'None of the above',
        correct:'b'

    } 

]

var quiz = document.getElementById('quiz');
var answer = document.querySelectorAll('.answer');
var question = document.getElementById('question');
var option_a = document.getElementById('a_value');
var option_b = document.getElementById('b_value');
var option_c = document.getElementById('c_value');
var option_d = document.getElementById('d_value');

var submission = document.getElementById('submit');

var currentQuestion=0;
var quizscore =0;

loadQuiz()

function loadQuiz()
{
    deselect()

    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d
}

function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}

submission.addEventListener('click' ,()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })
    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizscore= quizscore+1;
    }
    currentQuestion = currentQuestion+1;
    if(currentQuestion==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML= `<h1>You have answered ${quizscore} correctly out of ${quizdata.length}.`
    }
    else{
        loadQuiz()
    }
})
