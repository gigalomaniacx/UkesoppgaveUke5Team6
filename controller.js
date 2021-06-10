function chooseType(){
    randomNum = Math.floor(Math.random() * 100)
    randomNum >= 0 && randomNum <= 33 ? compResponse = '🥌' :
    randomNum >= 34 && randomNum <= 63 ? compResponse = '✂' :
    randomNum >= 64 && randomNum <= 100 ? compResponse = '📄' :
    console.log('unhandeled option in chooseType()');
}

function checkWinCondition(){
    chooseType();
    if (playerSelect == '🥌' && compResponse == '✂'){
        win();
    }
    else if (playerSelect == '✂' && compResponse == '📄'){
        win();
    }
    else if (playerSelect == '📄' && compResponse == '🥌'){
        win();
    }
    else if (playerSelect == '🥌' && compResponse == '📄'){
        loose();
    }
    else if (playerSelect == '📄' && compResponse == '✂'){
        loose();
    }
    else if (playerSelect == '✂' && compResponse == '🥌'){
        loose();
    }
    else if (playerSelect == compResponse){
        response = 'It\'s a draw!';
        draw++;
    }
    viewStats()
    updateView();
}

function viewStats(){
    if (wins > 0){
        viewWins = `You have won a total of: ${wins} times.<br/>`;
    } 
    if (loss > 0){
        viewLosses = `You have lost a total of: ${loss} times.<br/>`;
    } 
    if (draw > 0){
        viewDraws = `There has been ${draw} draws.`;
    }
}

function win(){
    response = 'You win!';
    wins++;
}

function loose(){
    response = 'You loose!';
    loss++;
}

