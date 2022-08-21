import {Game} from "/module/variables.js"
//helper functions


export function profile()
{
    Game.selectedProfile.forEach(img =>
        {
            img.addEventListener("click",e =>
            {
                let target=e.target.dataset.id;
                removeImgSelection(Game.selectedProfile);
                document.querySelector(`[data-id=${target}]`).classList.add('selected');
                
                //swapping values if selects second profile
                if(target=="x2" || target=="y2")
                {
                    Game.X_class="x2";
                    Game.Y_class="y2";
                }

                //setting turns
                Game.turn= target=='y'|| target=='y2'?true:false;
            });
        });
}

function removeImgSelection(img)
{
   [].forEach.call(img,(el)=>
   {
       el.classList.remove("selected");
   })
}

/**  funtion is use to setHoverEffect to the cell */
export function setHoverEffect(){
    Game.boardEl.classList.remove(Game.X_class);
    Game.boardEl.classList.remove(Game.Y_class);
    if (Game.turn){
        Game.boardEl.classList.add(Game.Y_class);
    }else{
        Game.boardEl.classList.add(Game.X_class);
    }
}

//used to add current image to cell
export function markCell(cell,currentClass)
{
    cell.classList.add(currentClass);
    Game.turn=!Game.turn;
    setHoverEffect();
}

//endgame function
export function endgame(draw,winEL,drawEl) 
{
    if(!draw)
    {
        winEL.classList.add("show");
    }
    else 
    {
        drawEl.classList.add("show");
    }
}

export function isDraw(flag)
{
   if(flag.length)
    return;
   else
    {
        let ch=false;
        let chk=0;
        Game.blockEl.forEach(cell =>
        {
            ch=cell.classList.contains(Game.X_class) || cell.classList.contains(Game.Y_class);
            if(ch)
                chk++;
        });
        if(chk==9)
            return true;
    }
}