$(() => {
    //player stats
    const player = {
        name: "Type Slayer",
        health: 100,
        weapons: ["chainsaw", "bfg9000"],
        score: 0
    }
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
        }
    }

    const playerAttack = () => {
        if (player.weapon == "chainsaw"){ 
            Enemy.this.health -= 10
        } else if (player.weapon == "bfg9000"){
            Enemy.this.health -= 20
        }
    }

    //function to start a new game
    const gameStart = () => {
        showHealth();
        $prompt.text(words[Math.floor(Math.random()*(words.length))])
        

    }

    //function submit. when button pressed compare input to prompt. if else statement for player interaction.  
    const submit = () => {
        if ($input.val == $prompt.val) {
            playerAttack()
            player.score += 100
        } else if ($input.val != $prompt.val) {
            Enemy.attack()
            player.score -=50
        }
        $input.val('')
        $prompt.text(words[Math.floor(Math.random()*(words.length))])
        console.log(player.health)
    }
    
    //creating div where word to type is displayed
    const $health = $('<div>').addClass('health')
    const $header = $('<header>').addClass('header')
    const $footer = $('<footer>').addClass('footer')
    const $interact = $('<div>').addClass('inter')
    const $input  = $('<input>').addClass('input')
    const $submit = $('<button>').addClass('submit').html('submit')
    const $score = $('<div>').addClass('score').text(player.score)
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

    $interact.appendTo($('body'))
    $('body').append('<br>')
    $prompt.appendTo($('body'))
    $start.appendTo($('body'))
    $score.appendTo($footer)
    $footer.appendTo('body')

    const showHealth = () => {
        for (let i = 0; i < 5; i++){
            const $fifth = $('<div>').addClass('fifth');
            $fifth.appendTo($health)
            if (player.health < 80){
                $fifth.remove
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