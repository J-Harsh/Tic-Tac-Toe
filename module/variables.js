//variables

export let Game=
{
    X_class:'x', //x for female
    Y_class:'y', //y for male
    turn:undefined,
    winner:null,
    selectedProfile:document.querySelectorAll('.img .id'),
    blockEl:document.querySelectorAll('.block'),
    boardEl:document.getElementById('board'),
    startBtn:document.getElementById('startBtn'),
    startWindow:document.querySelector('.start-game'),
    winEl:document.querySelector(".winner-msg"),
    drawEl:document.querySelector(".draw-msg"),
    winnerImg:document.querySelector(".winner-msg .winner"),
    restartBtn: document.getElementById("restartBtn"),
    drawBtn:document.getElementById("drawBtn"),
    gameWindow:document.querySelector(".container")
}
