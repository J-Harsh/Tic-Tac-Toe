//winning combinations for the game

export const win_com= 
[
    //horizontal win
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertical win
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagnol win
    [0,4,8],
    [6,4,2]
];

//check for winner
export function checkWin(currentClass,blockEl)
{
    let winMatch=[];
    win_com.some(comb =>
        {
            winMatch.push(comb.every(index =>
            {
                return blockEl[index].classList.contains(currentClass);
                
            }));
        });
    return winMatch || null;
}