var newGame=1;
var round=0;
var scores=[0,0];
var JoueurActif=1;

function TourSuivant(){
    if(JoueurActif===1){
        JoueurActif=2;
        document.querySelector('.player1').classList.remove('active');
        document.querySelector('.player2').classList.add('active');
    }
    else{
        JoueurActif=1;
        document.querySelector('.player2').classList.remove('active');
        document.querySelector('.player1').classList.add('active');
    }
    round=0;
    document.getElementById('current-1').textContent='0';
    document.getElementById('current-2').textContent='0';
    
}

document.querySelector('.new').addEventListener('click', () => {
    scores=[0,0];
    if(JoueurActif===2){
        document.querySelector('.player2').classList.remove('active');
        document.querySelector('.player1').classList.add('active');
    }
    JoueurActif=1;
    round=0;
    newGame=1;
    document.getElementById('score-1').textContent='0';
    document.getElementById('score-2').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('current-2').textContent='0';
});

document.querySelector('.roll').addEventListener('click', () => {
    if(newGame){
        var de=Math.floor( Math.random()*6) + 1;
        var domDe=document.querySelector('.de');
        domDe.src='images/face-' + de + ".png";
        if(de!==1){
            round+=de;
            var current1=document.querySelector(".scorecurrent1");
            var current2=document.getElementById("current-2");
            if(JoueurActif===1){
                current1.textContent=round;
            }
            else{
                current2.textContent=round;
            }
        }
        else{
            TourSuivant();
        }
    }
});

document.querySelector('.hold').addEventListener('click', () => {
    if(newGame){
        scores[JoueurActif-1]+=round;
        round=0;
        var score1=document.querySelector('.score1');
        var score2=document.querySelector('.score2');
        if(JoueurActif==1){
            score1.textContent=scores[0];
        }
        else{
            score2.textContent=scores[1];
        }
        if(scores[JoueurActif-1]>=100){
            newGame=0;
        }
        else{
            TourSuivant();
        }
    }
});