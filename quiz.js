const quizData = [
    { question: "Comment dit-on 'Good morning' en français ?", options: ["Bonjour", "Bonsoir", "Merci", "Salut"], answer: "Bonjour" },
    { question: "Quel est le pluriel de 'chien' ?", options: ["chiene", "chiens", "chienes", "chienz"], answer: "chiens" },
    { question: "Le mot 'maison' est un(e)...", options: ["verbe", "adjectif", "nom", "préposition"], answer: "nom" },
    { question: "Que signifie 'Merci' en anglais ?", options: ["Thank you", "Hello", "Goodbye", "Please"], answer: "Thank you" },
    { question: "Comment dit-on 'table' en français ?", options: ["tablo", "table", "tabela", "tablet"], answer: "table" },
    { question: "Quelle couleur signifie 'bleu' ?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Blue" },
    { question: "Choisissez l'article correct: ___ école", options: ["Le", "La", "Les", "Un"], answer: "La" },
    { question: "Quelle est la traduction de 'I have a dog' ?", options: ["J'ai un chat", "J'ai un chien", "Je suis un chien", "Tu as un chien"], answer: "J'ai un chien" },
    { question: "Complétez la phrase: 'Je ___ français.'", options: ["parler", "parle", "parles", "parlons"], answer: "parle" },
    { question: "Quel est l'opposé de 'petit' ?", options: ["gros", "grand", "mince", "haut"], answer: "grand" },
    { question: "Quelle est la forme correcte du verbe 'être' pour 'il' ?", options: ["es", "sont", "est", "être"], answer: "est" },
    { question: "Choisissez le bon mot: 'Le soleil est très ___.'", options: ["chaud", "froid", "dur", "léger"], answer: "chaud" },
    { question: "Le mot 'chat' est un(e)...", options: ["animal", "verbe", "couleur", "fruit"], answer: "animal" },
    { question: "Que signifie 'pomme' en anglais ?", options: ["Banana", "Apple", "Pear", "Peach"], answer: "Apple" },
    { question: "Complétez: 'Ils ___ en France.'", options: ["habitent", "habitez", "habite", "habiter"], answer: "habitent" },
    { question: "Quelle heure est-il si il est 12h ?", options: ["Midi", "Minuit", "Soir", "Matin"], answer: "Midi" },
    { question: "Comment dit-on 'beautiful' en français ?", options: ["Jolie", "Beau", "Bon", "Bien"], answer: "Beau" },
    { question: "Choisissez la bonne réponse: 'Elle ___ une voiture.'", options: ["as", "avoir", "a", "es"], answer: "a" },
    { question: "Le mot 'fleur' signifie...", options: ["flower", "flavor", "floor", "flour"], answer: "flower" },
    { question: "Complétez: 'Tu ___ intelligent.'", options: ["sont", "es", "être", "est"], answer: "es" },
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = ""; // İçeriği temizle
    quizData.forEach((item, index) => {
        const questionEl = document.createElement("div");   
        questionEl.classList.add("question");
        questionEl.innerHTML = `
            <h3>${index + 1}. ${item.question}</h3>
            ${item.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join("")}
        `;
        quizContainer.appendChild(questionEl);
    });
}

function submitQuiz() {
    let score = 0;
    quizData.forEach((item, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer && answer.value === item.answer) {
            score++;
        }
    });
    document.getElementById("score").innerText = `Votre score: ${score} / ${quizData.length}`;
    document.getElementById("result").style.display = "block";
}

window.onload = loadQuiz;
