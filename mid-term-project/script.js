const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");
const storyImage = document.getElementById("story-image");
const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices");
const startBtn = document.getElementById("start-btn");

// Story Data
const story = {
    start: {
        text: "You stand at the entrance of the Enchanted Forest. The air sparkles with magic and mystery. Do you wish to enter?",
        image: "images/forest_entrance.jpg",
        choices: [
            { text: "Enter the forest", next: "river" },
            { text: "Stay back", next: "stayBack" }
        ]
    },
    river: {
        text: "You follow a glowing path until you reach a shimmering river. A bridge made of light appears. What will you do?",
        image: "images/magic_river.jpg",
        choices: [
            { text: "Cross the bridge", next: "castle" },
            { text: "Swim across", next: "lostMagic" }
        ]
    },
    castle: {
        text: "You reach a magical crystal castle. Inside, a fairy queen offers you one wish. What do you wish for?",
        image: "images/crystal_castle.jpg",
        choices: [
            { text: "Wish for wisdom", next: "wisdomEnd" },
            { text: "Wish for power", next: "powerEnd" }
        ]
    },
    stayBack: {
        text: "You choose safety over adventure. The forest remains a mystery forever. Maybe next time!",
        image: "images/forest_exit.jpg",
        choices: []
    },
    lostMagic: {
        text: "The river’s magic currents pull you into a portal — you awaken in another realm, lost but amazed.",
        image: "images/magic_portal.jpg",
        choices: []
    },
    wisdomEnd: {
        text: "The fairy blesses you with eternal wisdom. You become the guardian of the Enchanted Forest.",
        image: "images/wisdom_forest.jpg",
        choices: []
    },
    powerEnd: {
        text: "The power corrupts your heart. The once-beautiful forest fades into darkness.",
        image: "images/dark_forest.jpg",
        choices: []
    }
};

// Functions
function startGame() {
    startScreen.style.display = "none";
    gameContainer.style.display = "block";
    showScene("start");
}

function showScene(sceneKey) {
    const scene = story[sceneKey];
    storyText.textContent = scene.text;
    storyImage.src = scene.image;
    choicesContainer.innerHTML = "";

    if (scene.choices.length === 0) {
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Play Again";
        restartBtn.classList.add("choice-btn", "restart-btn");
        restartBtn.onclick = () => startGame();
        choicesContainer.appendChild(restartBtn);
        return;
    }

    scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice.text;
        btn.classList.add("choice-btn");
        btn.onclick = () => showScene(choice.next);
        choicesContainer.appendChild(btn);
    });
}

// Event Listener
startBtn.addEventListener("click", startGame);
