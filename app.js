let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function levelup() {
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 4); 
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    console.log(gameseq);
    gamefalsh(randbtn);
    gameseq.push(randcolor);
}

function gamefalsh(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userfalsh(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function btnpress() {
    let btn = this;
    gamefalsh(btn); 
    console.log(this);
    userfalsh(btn);
    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) { 
    btn.addEventListener("click", btnpress);
}

function checkans() {
    let index = userseq.length - 1;
    if (userseq[index] == gameseq[index]) {
        console.log("same value");
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000); 
            userseq = []; 
        }
    } else {
        h2.innerHTML = `game over , <b>${level}</br>your score was `;
        resetGame(); 
    }
}

function resetGame() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}


