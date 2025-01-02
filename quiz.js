const questions = [
    { 
        question: "What is the capital of Canada?", 
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], 
        answer: "Ottawa" 
    },
    { 
        question: "What currency is used in Japan?", 
        options: ["Peso", "Won", "Yuan", "Yen"], 
        answer: "Yen" 
    },
    { 
        question: "What is the tallest mountain in the world?", 
        options: ["K2", "Mount Everest", "Lhotse", "Makalu"], 
        answer: "Mount Everest" 
    },
    // Add remaining questions here
];

let currentQuestionIndex = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

function showQuestion(index) {
    const question = questions[index];
    questionEl.textContent = question.question;

    // Clear previous options
    optionsEl.innerHTML = "";

    // Add new options
    question.options.forEach((option, i) => {
        const li = document.createElement("li");
        li.innerHTML = `<button class="option">${option}</button>`;
        li.querySelector("button").addEventListener("click", () => selectAnswer(option, question.answer));
        optionsEl.appendChild(li);
    });

    updateNavigationButtons();
}

function selectAnswer(selected, correct) {
    if (selected === correct) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.classList.remove("hidden", "incorrect");
        feedbackEl.classList.add("correct");
    } else {
        feedbackEl.textContent = "Incorrect!";
        feedbackEl.classList.remove("hidden", "correct");
        feedbackEl.classList.add("incorrect");
    }
}

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;
    feedbackEl.classList.add("hidden");
}

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
});

submitBtn.addEventListener("click", () => {
    alert("Quiz Submitted!");
    // Logic for final submission scoring
});

// Initial load
showQuestion(currentQuestionIndex);
