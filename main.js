
const animals = [
    { name: "사자", img: "https://picsum.photos/id/237/200/200", wins: 0 },
    { name: "호랑이", img: "https://picsum.photos/id/238/200/200", wins: 0 },
    { name: "코끼리", img: "https://picsum.photos/id/239/200/200", wins: 0 },
    { name: "기린", img: "https://picsum.photos/id/240/200/200", wins: 0 },
    { name: "고릴라", img: "https://picsum.photos/id/241/200/200", wins: 0 },
    { name: "북극곰", img: "https://picsum.photos/id/242/200/200", wins: 0 },
    { name: "하마", img: "https://picsum.photos/id/243/200/200", wins: 0 },
    { name: "악어", img: "https://picsum.photos/id/244/200/200", wins: 0 },
    { name: "독수리", img: "https://picsum.photos/id/245/200/200", wins: 0 },
    { name: "펭귄", img: "https://picsum.photos/id/246/200/200", wins: 0 },
    { name: "캥거루", img: "https://picsum.photos/id/247/200/200", wins: 0 },
    { name: "판다", img: "https://picsum.photos/id/248/200/200", wins: 0 },
    { name: "늑대", img: "https://picsum.photos/id/249/200/200", wins: 0 },
    { name: "여우", img: "https://picsum.photos/id/250/200/200", wins: 0 },
    { name: "올빼미", img: "https://picsum.photos/id/251/200/200", wins: 0 },
    { name: "치타", img: "https://picsum.photos/id/252/200/200", wins: 0 },
    { name: "티라노사우루스", img: "https://picsum.photos/id/253/200/200", wins: 0 },
    { name: "트리케라톱스", img: "https://picsum.photos/id/254/200/200", wins: 0 },
    { name: "스테고사우루스", img: "https://picsum.photos/id/255/200/200", wins: 0 },
    { name: "브라키오사우루스", img: "https://picsum.photos/id/256/200/200", wins: 0 },
    { name: "벨로시랩터", img: "https://picsum.photos/id/257/200/200", wins: 0 },
    { name: "프테라노돈", img: "https://picsum.photos/id/258/200/200", wins: 0 },
    { name: "상어", img: "https://picsum.photos/id/259/200/200", wins: 0 },
    { name: "고래", img: "https://picsum.photos/id/260/200/200", wins: 0 },
    { name: "돌고래", img: "https://picsum.photos/id/261/200/200", wins: 0 },
    { name: "문어", img: "https://picsum.photos/id/262/200/200", wins: 0 },
    { name: "코뿔소", img: "https://picsum.photos/id/263/200/200", wins: 0 },
    { name: "표범", img: "https://picsum.photos/id/264/200/200", wins: 0 },
    { name: "얼룩말", img: "https://picsum.photos/id/265/200/200", wins: 0 },
    { name: "사슴", img: "https://picsum.photos/id/266/200/200", wins: 0 },
    { name: "침팬지", img: "https://picsum.photos/id/267/200/200", wins: 0 },
    { name: "아나콘다", img: "https://picsum.photos/id/268/200/200", wins: 0 },
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
