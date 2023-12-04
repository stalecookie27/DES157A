(function(){
    'use strict'
    console.log('reading JS');
    
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    //overlay
    const contButton = document.querySelector('#continue');

    //sounds
    const gulpSound = new Audio('music/gulping.mp3');
    const pourSound = new Audio('music/pouring.mp3');

    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };


   /*  //This gets the current player: 
    gameData.players[gameData.index]

    //This gets the first die and the second die: 
    gameData.dice[gameData.roll1-1]
    gameData.dice[gameData.roll2-1]

    //This gets the score of the current player: 
    gameData.score[gameData.index]

    //This gets the index, or turn
    gameData.index

    //This gets the individual dice values and the added dice value
    gameData.roll1
    gameData.roll2
    gameData.rollSum

    //This gets the winning threshold
    gameData.rollSum */

    contButton.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('main').className = 'showing';
        document.getElementById('overlay').className = 'hidden';
    });

    document.querySelector('#gamerules').addEventListener('click', function(){
        document.getElementById('overlay').className = 'showing';
        startGame.remove();
        document.querySelector('article').innerHTML = `<h3>INSTRUCTION</3> <button id="close">close</button>`
        document.querySelector('#close').addEventListener('click',function(){
            document.getElementById('overlay').className = 'hidden';
        });
    });
        
    startGame.addEventListener('click', function(){
        pourSound.play();
        // random set of game index
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>THE GAME HAS STARTED</h2>';
        gameControl.innerHTML += '<button id="quit">QUIT THE GAME</button>';
        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn(){
        startGame.remove();
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        //console.log(gameData.rollSum);

        if (gameData.rollSum === 2){
            //console.log("snake eyes!");
            game.innerHTML = '<p>Sorry, you have rolled snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            //console.log("A one was rolled!");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        } else {
            gulpSound.play();
            //console.log("The game continues");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            //check winning condition
            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins the game with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a new game?";
        } else {
            //show current score
            showCurrentScore(); 
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p><strong>Score for ${gameData.players[0]}: ${gameData.score[0]}</strong><br><strong>Score for ${gameData.players[1]}: ${gameData.score[1]}</strong>`;
    }

  
})();