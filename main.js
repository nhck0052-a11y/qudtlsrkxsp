const animals = [
    { name: "사자", img: "https://source.unsplash.com/featured/200x200/?lion", wins: 0 },
    { name: "호랑이", img: "https://source.unsplash.com/featured/200x200/?tiger", wins: 0 },
    { name: "코끼리", img: "https://source.unsplash.com/featured/200x200/?elephant", wins: 0 },
    { name: "기린", img: "https://source.unsplash.com/featured/200x200/?giraffe", wins: 0 },
    { name: "고릴라", img: "https://source.unsplash.com/featured/200x200/?gorilla", wins: 0 },
    { name: "북극곰", img: "https://source.unsplash.com/featured/200x200/?polar-bear", wins: 0 },
    { name: "하마", img: "https://source.unsplash.com/featured/200x200/?hippo", wins: 0 },
    { name: "악어", img: "https://source.unsplash.com/featured/200x200/?alligator", wins: 0 },
    { name: "독수리", img: "https://source.unsplash.com/featured/200x200/?eagle", wins: 0 },
    { name: "펭귄", img: "https://source.unsplash.com/featured/200x200/?penguin", wins: 0 },
    { name: "캥거루", img: "https://source.unsplash.com/featured/200x200/?kangaroo", wins: 0 },
    { name: "판다", img: "https://source.unsplash.com/featured/200x200/?panda", wins: 0 },
    { name: "늑대", img: "https://source.unsplash.com/featured/200x200/?wolf", wins: 0 },
    { name: "여우", img: "https://source.unsplash.com/featured/200x200/?fox", wins: 0 },
    { name: "올빼미", img: "https://source.unsplash.com/featured/200x200/?owl", wins: 0 },
    { name: "치타", img: "https://source.unsplash.com/featured/200x200/?cheetah", wins: 0 },
    { name: "티라노사우루스", img: "https://source.unsplash.com/featured/200x200/?tyrannosaurus", wins: 0 },
    { name: "트리케라톱스", img: "https://source.unsplash.com/featured/200x200/?triceratops", wins: 0 },
    { name: "스테고사우루스", img: "https://source.unsplash.com/featured/200x200/?stegosaurus", wins: 0 },
    { name: "브라키오사우루스", img: "https://source.unsplash.com/featured/200x200/?brachiosaurus", wins: 0 },
    { name: "벨로시랩터", img: "https://source.unsplash.com/featured/200x200/?velociraptor", wins: 0 },
    { name: "프테라노돈", img: "https://source.unsplash.com/featured/200x200/?pteranodon", wins: 0 },
    { name: "상어", img: "https://source.unsplash.com/featured/200x200/?shark", wins: 0 },
    { name: "고래", img: "https://source.unsplash.com/featured/200x200/?whale", wins: 0 },
    { name: "돌고래", img: "https://source.unsplash.com/featured/200x200/?dolphin", wins: 0 },
    { name: "문어", img: "https://source.unsplash.com/featured/200x200/?octopus", wins: 0 },
    { name: "코뿔소", img: "https://source.unsplash.com/featured/200x200/?rhinoceros", wins: 0 },
    { name: "표범", img: "https://source.unsplash.com/featured/200x200/?leopard", wins: 0 },
    { name: "얼룩말", img: "https://source.unsplash.com/featured/200x200/?zebra", wins: 0 },
    { name: "사슴", img: "https://source.unsplash.com/featured/200x200/?deer", wins: 0 },
    { name: "침팬지", img: "https://source.unsplash.com/featured/200x200/?chimpanzee", wins: 0 },
    { name: "아나콘다", img: "https://source.unsplash.com/featured/200x200/?anaconda", wins: 0 },
];

let currentMatchups = [];
let winners = [];
let round = 0;

const roundTitle = document.getElementById("round-title");
const animal1Div = document.getElementById("animal-1");
const animal2Div = document.getElementById("animal-2");
const gameDiv = document.getElementById("game");
const rankingDiv = document.getElementById("ranking");
const rankingList = document.getElementById("ranking-list");

function startGame() {
    shuffle(animals);
    currentMatchups = createMatchups(animals);
    round = 0;
    displayMatchup();
}

function createMatchups(animalList) {
    const matchups = [];
    for (let i = 0; i < animalList.length; i += 2) {
        matchups.push([animalList[i], animalList[i + 1]]);
    }
    return matchups;
}

function displayMatchup() {
    if (round >= currentMatchups.length) {
        if (winners.length === 1) {
            showRanking();
            return;
        }
        shuffle(winners);
        currentMatchups = createMatchups(winners);
        winners = [];
        round = 0;
    }

    const [animal1, animal2] = currentMatchups[round];

    roundTitle.textContent = `${getRoundName(currentMatchups.length * 2)} - ${round + 1}/${currentMatchups.length}`;

    animal1Div.querySelector("img").src = animal1.img;
    animal1Div.querySelector("p").textContent = animal1.name;
    animal1Div.onclick = () => selectWinner(animal1, animal2);

    animal2Div.querySelector("img").src = animal2.img;
    animal2Div.querySelector("p").textContent = animal2.name;
    animal2Div.onclick = () => selectWinner(animal2, animal1);
}

function selectWinner(winner, loser) {
    winner.wins++;
    winners.push(winner);
    round++;
    displayMatchup();
}

function showRanking() {
    gameDiv.style.display = "none";
    rankingDiv.style.display = "block";

    animals.sort((a, b) => b.wins - a.wins);

    rankingList.innerHTML = "";
    animals.forEach((animal, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}위: ${animal.name} (${animal.wins}승)`;
        rankingList.appendChild(li);
    });
}

function getRoundName(num) {
    if (num === 2) return "결승";
    return `${num}강`;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", startGame);