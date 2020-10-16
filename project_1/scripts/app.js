$(() => {
    //player stats
    const player = {
        name: "Type Slayer",
        health: 100,
        weapons: ["bfg9000"],
    }

        //players attack function
    const playerAttack = () => {
        if ($input.val === $prompt.val) {
            Enemy.health -= 20;
            score += 100;
        } else if ($input.val != $prompt.val){
            Enemy.attack();
            score -= 50;
        }    
    }
    
    let score = 0;

    let killedEnemies = 0;

 
    //declaring array for all typing words. Random selection
    const words = ['air', 'answer', 'being', 'miss', 'year', 'I', 'move', 'eat', 'always', 'away', 'sun', 'get', 'great', 'air', 'page', 'feet', 'different', 'had', 'without', 'study', 'mile', 'think', 'need', 'let', 'mean', 'went', 'almost', 'to', 'how', 'them', 'upon', 'when', 'kind', 'it', 'are', 'about', 'call', 'food', 'air', 'or', 'example', 'state', 'cut', 'may', 'hand', 'would', 'should', 'work', 'good', 'sun', 'form', 'see', 'also', 'different', 'grow', 'get', 'few', 'began', 'find', 'no', 'carry', 'sun', 'through', 'say', 'but', 'those', 'been', 'follow', 'see', 'most', 'point', 'call', 'small', 'back', 'another', 'he', 'that', 'answer', 'time', 'plant', 'went', 'pizazz', 'piazzas', 'pizzas', 'suburban', 'assuming', 'obstinance', 'foramens'];

//create enemies class with gen name health and strength.
    class Enemy {
        constructor(name, health, strength) {
            this.name = "Dungeon Monster";
            this.health = Math.floor(Math.random() * 21) + 30;
            this.strength = Math.floor(Math.random() * 4) + 9; 
        }
//function to attack player reducing player health by their strength
        attack = (player) => {
            player.health -= this.strength
            showModal("You got hit for " + this.strength + " health")
        }
    }

    //function to start a new game
    
    //function submit. when button pressed compare input to prompt. if else statement for player interaction.  
    const submit = () => {
        playerAttack();
        $input.val('')
        $prompt.text(words[Math.floor(Math.random()*(words.length))])
        showModal("enemy has " + Enemy.health + " health")
        console.log(player.health)
    }

    //modal message function. From modal lesson.
    const showModal = (message) => {
        $('#modal-textbox').text(message);
        $('#modal').css('display', 'flex');
    }
    
    //creating div where word to type is displayed
    const $health = $('<div>').addClass('health')
    const $header = $('<header>').addClass('header')
    const $footer = $('<footer>').addClass('footer')
    const $interact = $('<div>').addClass('inter')
    const $input  = $('<input>').addClass('input')
    const $submit = $('<button>').addClass('submit').html('submit')
    const $score = $('<div>').addClass('score').text(score)
    $submit.on('click', (e) =>{
        submit($(e.target))
    })
    const $start = $('<button>').addClass('start').text('start')
    $start.on('click', (e) =>{
        gameStart($(e.target))
    })
    $health.appendTo($header)
    $header.appendTo('body')
    $input.appendTo($interact)
    $submit.appendTo($interact)
    const $prompt = $('<div>').addClass('prompt')
    //code referenced from tic tac toe assignment. On click button runs submit function.
    $submit.on('click', (e) =>{
        submit($(e.target))
    })

    $('body').append('<br>')
    $start.appendTo($('body'))
    $score.appendTo($footer)
    $footer.appendTo('body')

    const gameStart = () => {
        showHealth();
        $prompt.appendTo($('body'))
        $interact.appendTo($('body'))
        $prompt.text(words[Math.floor(Math.random()*(words.length))])
    }

    const showHealth = () => {
        for (let i = 0; i < 5; i++){
            const $fifth = $('<div>').addClass('fifth');
            $fifth.appendTo($health)
            if (player.health < 80){
                $fifth.remove
            }
             if (player.health < 60){
                $fifth.remove
            }
            if (player.health < 40){
                $fifth.remove
            }
            if (player.health < 20){
                $fifth.remove
            }
            if (player.health == 0){
                return 
            }
        }
        
    } 
    //code pulled from spacebattle code. Creating random list of enemies to face. 
    const randomLevel = [];
    for (let i = 0; i < 7; i++) {
    randomLevel.push(new Enemy());
    } 

    for(let i = 0; i < randomLevel.length; i++){
        $(randomLevel[i])
    }
})