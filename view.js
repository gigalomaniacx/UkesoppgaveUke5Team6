updateView()
function updateView(){
    document.getElementById('app').innerHTML = `
        <h1 onclick="chooseType()">Supre Duper Stein Saks Papper</h1>
        <div class="wrap">
        <button class="button" id="stein" value="🥌" onclick="playerSelect = this.value;checkWinCondition()">Stein</button>
        <button class="button" id="saks" value="✂" onclick="playerSelect = this.value;checkWinCondition()">Saks</button>
        <button class="button" id="papir" value="📄" onclick="playerSelect = this.value;checkWinCondition()">Papir</button><br/>
        </div>
        <p class=ikon1>${playerSelect}</p><br/>
        <p class=svar>${response}</p><br/>
        <p class=ikon1>${compResponse}</p><br/>
        <p class=infotxt>${viewWins}</p>
        <p class=infotxt>${viewLosses}</p>
        <p class=infotxt>${viewDraws}</p>
       
    `;
}
