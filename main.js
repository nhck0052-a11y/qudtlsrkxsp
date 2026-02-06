
const animals = [
    { name: "사자", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "호랑이", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "코끼리", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "기린", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "고릴라", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "북극곰", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "하마", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "악어", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "독수리", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "펭귄", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "캥거루", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "판다", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "늑대", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "여우", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "올빼미", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "치타", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "티라노사우루스", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "트리케라톱스", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "스테고사우루스", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "브라키오사우루스", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "벨로시랩터", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "프테라노돈", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "상어", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "고래", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "돌고래", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "문어", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "코뿔소", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "표범", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "얼룩말", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "사슴", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
    { name: "침팬지", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3wvd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNmZjYzNDciLz48L3N2Zz4", wins: 0 },
    { name: "아나콘다", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmY2MzQ3Ii8+PC9zdmc+", wins: 0 },
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
