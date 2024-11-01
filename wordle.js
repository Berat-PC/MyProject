
const words = [
    "MAIRE", "PIANO", "LIVRE", "CHAIR", "TABLE", "FLEUR", "ROUGE", "BLEUE", "SOEUR",
    "AMOUR", "NUAGE", "RIVIE", "FORTE", "MERCI", "RADIO", "VACHE", "JAUNE", "NOIRE",
    "BLANC", "COEUR", "CHEVE", "MAMAN", "PIECE", "MOTIF", "PLACE", "VOYER", "CHOSE",
    "GENRE", "HOMME", "FEMME"
];


//random
let targetWord = selectRandomWord();
let attempts = 0;
const maxAttempts = 6;

// Rastgele kelime seçme fonksiyonu
function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function createBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = ""; // Oyun tahtasını temizle
    for (let i = 0; i < maxAttempts * 5; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute("id", `tile-${i}`);
        gameBoard.appendChild(tile);
    }
}

function makeGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toUpperCase();
    if (guess.length !== 5) {
        alert("Veuillez entrer un mot de 5 lettres.");
        return;
    }

    if (attempts >= maxAttempts) {
        document.getElementById("message").textContent = "Vous avez perdu! Le mot était: " + targetWord;
        return;
    }

    displayGuess(guess);
    guessInput.value = "";
    attempts++;

    if (guess === targetWord) {
        document.getElementById("message").textContent = "Félicitations! Vous avez trouvé le mot!";
    } else if (attempts === maxAttempts) {
        document.getElementById("message").textContent = "Vous avez perdu! Le mot était: " + targetWord;
    }
}

function displayGuess(guess) {
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${attempts * 5 + i}`);
        tile.textContent = guess[i];

        if (guess[i] === targetWord[i]) {
            tile.classList.add("correct");
        } else if (targetWord.includes(guess[i])) {
            tile.classList.add("present");
        } else {
            tile.classList.add("absent");
        }
    }
}

function startNewGame() {
    targetWord = selectRandomWord(); // Yeni kelime seç
    attempts = 0;
    document.getElementById("message").textContent = ""; // Mesaj alanını temizle
    createBoard(); // Yeni oyun tahtasını oluştur
}

window.onload = () => {
    createBoard();
    document.getElementById("guess-input").addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            makeGuess();
        }
    });
};
