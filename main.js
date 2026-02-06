
const animals = [
    { name: "사자", img: "https://i.imgur.com/vTzw8UF.jpeg", wins: 0 },
    { name: "호랑이", img: "https://i.imgur.com/iRk99xS.jpeg", wins: 0 },
    { name: "코끼리", img: "https://i.imgur.com/p8PjYfk.jpeg", wins: 0 },
    { name: "기린", img: "https://i.imgur.com/r207aQF.jpeg", wins: 0 },
    { name: "고릴라", img: "https://i.imgur.com/uW8xX4r.jpeg", wins: 0 },
    { name: "북극곰", img: "https://i.imgur.com/j4k2Y2A.jpeg", wins: 0 },
    { name: "하마", img: "https://i.imgur.com/oRk3sP3.jpeg", wins: 0 },
    { name: "악어", img: "https://i.imgur.com/5i5t3sF.jpeg", wins: 0 },
    { name: "독수리", img: "https://i.imgur.com/bW3A1p2.jpeg", wins: 0 },
    { name: "펭귄", img: "https://i.imgur.com/PlbWb2p.jpeg", wins: 0 },
    { name: "캥거루", img: "https://i.imgur.com/JCRgJdF.jpeg", wins: 0 },
    { name: "판다", img: "https://i.imgur.com/2X3tV5y.jpeg", wins: 0 },
    { name: "늑대", img: "https://i.imgur.com/2YlMhHj.jpeg", wins: 0 },
    { name: "여우", img: "https://i.imgur.com/NKVrWwN.jpeg", wins: 0 },
    { name: "올빼미", img: "https://i.imgur.com/3Z3xRtj.jpeg", wins: 0 },
    { name: "치타", img: "https://i.imgur.com/uRde2mE.jpeg", wins: 0 },
    { name: "티라노사우루스", img: "https://i.imgur.com/b3x7g8E.jpeg", wins: 0 },
    { name: "트리케라톱스", img: "https://i.imgur.com/x8z5d2X.jpeg", wins: 0 },
    { name: "스테고사우루스", img: "https://i.imgur.com/cxp9W7x.jpeg", wins: 0 },
    { name: "브라키오사우루스", img: "https://i.imgur.com/IQT3b5S.jpeg", wins: 0 },
    { name: "벨로시랩터", img: "https://i.imgur.com/sWjXz1T.jpeg", wins: 0 },
    { name: "프테라노돈", img: "https://i.imgur.com/9y0Asf4.jpeg", wins: 0 },
    { name: "상어", img: "https://i.imgur.com/sLQkQ2R.jpeg", wins: 0 },
    { name: "고래", img: "https://i.imgur.com/3Y1kE8T.jpeg", wins: 0 },
    { name: "돌고래", img: "https://i.imgur.com/n1fT9gC.jpeg", wins: 0 },
    { name: "문어", img: "https://i.imgur.com/Q2a7Nq2.jpeg", wins: 0 },
    { name: "코뿔소", img: "https://i.imgur.com/vVCpA6k.jpeg", wins: 0 },
    { name: "표범", img: "https://i.imgur.com/xWf2qML.jpeg", wins: 0 },
    { name: "얼룩말", img: "https://i.imgur.com/f5D3tZ4.jpeg", wins: 0 },
    { name: "사슴", img: "https://i.imgur.com/m4wV2zM.jpeg", wins: 0 },
    { name: "침팬지", img: "https://i.imgur.com/6SNCJ3z.jpeg", wins: 0 },
    { name: "아나콘다", img: "https://i.imgur.com/4gPcD6b.jpeg", wins: 0 },
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
