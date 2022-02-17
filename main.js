var game = function(){
  let time = 50;
  let movement = 20;
  let movementBar = 20;
  let width = document.documentElement.clientWidth - movement;
  let height = document.documentElement.clientHeight - movement;
  let controlGame;
  let player1;
  let player2;

  function start(){
      init();
      controlGame = setInterval(play, time);
  }

  function init(){
      ball.style.left = 0;
      ball.state = 1;
      ball.direction = 1; // right 1, left 2
      player1 = new Object();
      player2 = new Object();
      player1.keyPress = false;
      player1.keyCode = null;
      player2.keyPress = false;
      player2.keyCode = null;
  }

  function stop(){
      clearInterval(controlGame);
      document.body.style.background = "#f00";
  }

  function play(){
      moveBall();
      moveBar();
      checkIfLost();
  }
  
    function checkIfLost(){
        if(ball.offsetLeft >= width){
            stop();
            console.log("punto player 1");
        }
        if(ball.offsetLeft <= 0){
            stop();
            console.log("punto player 2");
        }
    }

    function moveBall(){
        checkStateBall();
        switch(ball.state){
            case 1: // derecha, abajo
                ball.style.left = (ball.offsetLeft + movement) +"px";
                ball.style.top = (ball.offsetTop + movement) +"px";
                break;
            case 2: // derecha, arriba
                ball.style.left = (ball.offsetLeft + movement) +"px";
                ball.style.top = (ball.offsetTop - movement) +"px";
                break;
            case 3: // izquierda, abajo
                ball.style.left = (ball.offsetLeft - movement) +"px";
                ball.style.top = (ball.offsetTop + movement) +"px";
                break;
            case 4: // izquierda, arriba
                ball.style.left = (ball.offsetLeft - movement) +"px";
                ball.style.top = (ball.offsetTop - movement) +"px";
                break;
        }
    }
  
      function moveBar(){
        if(player1.keyPress){
            if(player1.keyCode == 81 && bar1.offsetTop >=0)
                bar1.style.top = (bar1.offsetTop - movementBar) + "px";
            if(player1.keyCode == 65 && (bar1.offsetTop + bar1.clientHeight)<=height)
                bar1.style.top = (bar1.offsetTop + movementBar) + "px";
            
        }
        if(player2.keyPress){
            if(player2.keyCode == 79 && bar2.offsetTop>=0)
                bar2.style.top = (bar2.offsetTop - movementBar) +"px";
            if(player2.keyCode == 76 && (bar2.offsetTop + bar2.clientHeight)<=height)
                bar2.style.top = (bar2.offsetTop + movementBar) +"px";
        }
    }
}
