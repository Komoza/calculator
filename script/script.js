let buffer = 0;
let sing = 'none';
let removeScreen = false;

function pressBtn(button) {
    let scoreboard = document.getElementById("scoreboardID")
    if (scoreboard.value == 'undefined'){
        scoreboard.value = 0;
    }
    if (typeof(button) == "number") {
        if (removeScreen) {
            scoreboard.value = 0;
            removeScreen = false;
        }
        scoreboard.value =  Number(scoreboard.value) * 10 + button;
    }else{ 
        if (button == 'AC'){
            scoreboard.value = 0;
            sign = 'none'; 
            removeScreen = false;
        }
        if (button == 'unary_minus'){
            scoreboard.value = Number(scoreboard.value) * (-1);
        }

        if (button == 'plus'){
           buffer = scoreboard.value;
           sign = 'plus';
           removeScreen = true;
        }
        if (button == 'subtraction'){
            buffer = scoreboard.value;
            sign = 'subtraction';
            removeScreen = true;
        }
        if (button == 'multiplication'){
            buffer = scoreboard.value;
            sign = 'multiplication';
            removeScreen = true;
        }
        if (button == 'division'){
            buffer = scoreboard.value;
            sign = 'division';
            removeScreen = true;
        }
    }
}
function count() {
    let scoreboard = document.getElementById("scoreboardID");
    if (sign == 'plus'){
        scoreboard.value = Number(buffer) + Number(scoreboard.value);
    }
    if (sign == 'subtraction'){
        scoreboard.value = Number(buffer) - Number(scoreboard.value);
    }
    if (sign == 'multiplication'){
        scoreboard.value = Number(buffer) * Number(scoreboard.value);
    }
    if (sign == 'division'){
        if(scoreboard.value == 0){
            scoreboard.value = 'undefined';  
        }else{
            scoreboard.value = Number(buffer) / Number(scoreboard.value);  
        }
        
    }

}
