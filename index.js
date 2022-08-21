import {Game} from "/module/variables.js"
import {profile,setHoverEffect,markCell,endgame,isDraw} from "/module/helper.js"
import {checkWin,win_com} from "/module/win.js"
//Game button variables
Game.startBtn.addEventListener("click",startGame);
Game.restartBtn.addEventListener("click",startGame);
Game.drawBtn.addEventListener("click",startGame);
  

profile();

//start the game

function startGame()
{
    
    
    setHoverEffect();

    //iterate over cells and add click events for tic tac
    Game.blockEl.forEach(cell => 
        {
            cell.classList.remove(Game.X_class);
            cell.classList.remove(Game.Y_class);
            cell.classList.remove("win");
            cell.removeEventListener("click", handleClick);
            cell.addEventListener("click", handleClick, {once : true});
        });

    Game.gameWindow.classList.remove("hide");
    Game.startWindow.classList.add('hide');
    Game.winEl.classList.remove("show");
    Game.drawEl.classList.remove("show");
    Game.winnerImg.children.length ? Game.winnerImg.removeChild(Game.winner) : null;
}

function handleClick(e)
{
    const cell=e.target;
    const currentClass= Game.turn ? Game.Y_class : Game.X_class;
    
    markCell(cell,currentClass);
    let flag=checkWin(currentClass,Game.blockEl).filter((win,index)=>
    {
        
        if(win)
        {
            

             // add green background to the winner 
            win_com[index].map(i => 
            {
                Game.blockEl[i].classList.add('win');
            })
            
            Game.winner=Game.blockEl[win_com[index][0]].cloneNode(true);
            return win!==false;
        }
    });


    if (flag.length)
    {
        endgame(false,Game.winEl,Game.drawEl);
        Game.winnerImg.append(Game.winner);
    }
    else if(isDraw(flag))
    {
        endgame(true,Game.winEl,Game.drawEl);
    }
}





