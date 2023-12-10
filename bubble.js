let bubbles='';
let randomNumber=0;
let hitNumber=0;
let clickNumber=0;
let timer=60;
let score=0;

function generateBubble(){
    for(i=1;i<=60;i++)
    {
    randomNumber=Number(Math.floor(Math.random()*10));
    bubbles+=`<p id="value">${randomNumber}</p>`;
    }
    document.querySelector('.gamespace').innerHTML = bubbles;
}

function generateHit(){
    hitNumber=Number(Math.floor(Math.random()*10));
    document.querySelector('#hit').innerHTML=`${hitNumber}`;
}

function generateTime(){
    var timertime=setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector('#time').innerHTML=`${timer}`;
        }
        else{
            clearInterval(timertime);
            bubbles='';
            hitNumber='';
            timer='';
            document.querySelector('#time').innerHTML=`${timer}`;
            document.querySelector('.gamespace').innerHTML = bubbles;
            document.querySelector('#hit').innerHTML=`${hitNumber}`;
            let scoreboard=score;
            score='';
            document.querySelector('#score').innerHTML=`${score}`;
            document.querySelector('.gamespace').innerHTML=`<h3 align="center">Your Score is ${scoreboard}<h3><br><button id="newGame" onclick="newGame();">New Game</button>`;
        }
    }, 1000);
}

function generateScore(){
    score +=10;
    document.querySelector('#score').innerHTML = `${score}`;
}

document.querySelector('.gamespace').addEventListener('click',
function(event){
    clickNumber=Number(event.target.innerHTML);
    console.log(clickNumber);
    if(clickNumber===hitNumber)
    {
        generateScore();
        bubbles='';
        generateBubble();
        generateHit();
    }
});

function startGame(){
    newGame();
}

function newGame(){
    bubbles='';
    randomNumber=0;
    hitNumber=0;
    clickNumber=0;
    timer=60;
    score=0;
    document.querySelector('#time').innerHTML=`${timer}`;
    document.querySelector('.gamespace').innerHTML = bubbles;
    document.querySelector('#hit').innerHTML=`${hitNumber}`;
    document.querySelector('#score').innerHTML=`${score}`;
    generateBubble();
    generateHit();
    generateTime();
}


function firstGame(){
    bubbles='';
    hitNumber='';
    timer='';
    document.querySelector('#time').innerHTML=`${timer}`;
    document.querySelector('.gamespace').innerHTML = bubbles;
    document.querySelector('#hit').innerHTML=`${hitNumber}`;
    score='';
    document.querySelector('#score').innerHTML=`${score}`;
    document.querySelector('.gamespace').innerHTML=`<h3>You Will Get 60 Seconds<h3><br><h3>Click The Bubbles</h3><br><h3>Having The Hit Number</h3><br><h3>Hit Will Change On</h3><br><h3>Every Right Click</h3><br><button id="newGame" onclick="startGame();">Start Game</button>`;
}

firstGame();