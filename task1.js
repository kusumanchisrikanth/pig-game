var scores,roundscores,activeplayer,gameplaying;
var ldice;
init();


//document.querySelector('#current-' + activeplayer).textContent=dice;
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gameplaying){
    var dice= Math.floor(Math.random()*6) + 1;
    
    //image for dice
    document.querySelector('.dice').src= 'dice-' + dice + '.png';
    document.querySelector('.dice').style.display='block';


    //if >1 dice condition and logics

    if(ldice==6 && dice==6){
        scores[activeplayer]=0;
        document.querySelector('#score-' + activeplayer).textContent='0';
        nextplayer();

    }
     else if(dice !==1){
        roundscores=roundscores+dice;
        document.querySelector('#current-' + activeplayer ).textContent=roundscores;
    }
        else{
           nextplayer();
        }
        ldice=dice;
    }
    
});


document.querySelector('.btn-hold').addEventListener('click' , function(){
    if (gameplaying){
    //update to main score
    scores[activeplayer]=scores[activeplayer] + roundscores;
    //updating //
    document.querySelector('#score-' + activeplayer).textContent=scores[activeplayer];
    //hold on to another player and also winner

     if(scores[activeplayer]>=100){
         document.querySelector('#name-' + activeplayer).textContent='WINNER !!'
         document.querySelector('.dice').style.display='none';
         document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
         gameplaying=false;
     }
      else{
          nextplayer();
      }
    }
});


//calling fucntion
function nextplayer(){
    activeplayer===0 ? activeplayer=1 :activeplayer=0;
    roundscores=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.dice').style.display='none';



 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');
  //by using toggle or by below method we can change active player {cool right};
   /*   if(activeplayer===0){
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');
    }
    else{
        document.querySelector('.player-1-panel').classList.add('active') ;
         document.querySelector('.player-0-panel').classList.remove('active');

    }*/
}






document.querySelector('.btn-new').addEventListener('click',init);

function init(){
     gameplaying=true;
    scores=[0,0];
    roundscores=0;
    activeplayer=0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0' ).textContent='PLAYER 1';
    document.getElementById('name-1' ).textContent='PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

}
