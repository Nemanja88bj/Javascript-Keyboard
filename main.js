var ball = document.getElementById('ball');


addEventListener('keydown', move); //uzima eventListener na ceo body, move je funkcija

function move(e){
  //  (e.which); // ispisuje kod dugmeta kojeg pritisnemo na tastaturi
    
    if (e.which == 37){ 
        ball.style.left = '50px'; // 50px mora biti unutar stringa
    }
     if (e.which == 38){
        ball.style.top = '55px'; // 50px mora biti unutar stringa
    }
     if (e.which == 39){
        ball.style.left = '1100px'; // 50px mora biti unutar stringa
    }
     if (e.which == 40){
        ball.style.top = '600px'; // 50px mora biti unutar stringa
    }
}