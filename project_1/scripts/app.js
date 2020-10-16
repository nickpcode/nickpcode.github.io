$(() => {

    //declaring array for all typing words. Random selection
    const words = ['air', 'answer', 'being', 'miss', 'year', 'I', 'move', 'eat', 'always', 'away', 'sun', 'get', 'great', 'air', 'page', 'feet', 'different', 'had', 'without', 'study', 'mile', 'think', 'need', 'let', 'mean', 'went', 'almost', 'to', 'how', 'them', 'upon', 'when', 'kind', 'it', 'are', 'about', 'call', 'food', 'air', 'or', 'example', 'state', 'cut', 'may', 'hand', 'would', 'should', 'work', 'good', 'sun', 'form', 'see', 'also', 'different', 'grow', 'get', 'few', 'began', 'find', 'no', 'carry', 'sun', 'through', 'say', 'but', 'those', 'been', 'follow', 'see', 'most', 'point', 'call', 'small', 'back', 'another', 'he', 'that', 'answer', 'time', 'plant', 'went', 'pizazz', 'piazzas', 'pizzas', 'suburban', 'assuming', 'obstinance', 'foramens'];

    //create character class
    class Character{
        constructor(name, health, strength) {
            this.name = name
            this.health = health
            this.strength = strength;
        }
    }
     //create enemy class
     class Enemy extends Character {
        constructor() {
            let name = "Dungeon Monster";
        //randomized health and strength
            let health = Math.floor(Math.random() * 21) + 30;
            let strength = Math.floor(Math.random() * 4) + 9; 
            super(name, health, strength);
        }
    //function to attack player reducing player health by enemy strength
        attack (op) {
            op.health -= this.strength
            showModal("You got hit for " + this.strength + " health")
        }
    }

    //create player
    class Player extends Character {
        playerAttack (op) {
            const submit = () => {
                this.playerAttack(op);
                $input.val('')
                $prompt.text(words[Math.floor(Math.random()*(words.length))])
                showModal(op.name + " has " + op.health + " health")
                console.log(player.health)
            }
            //code referenced from tic tac toe assignment. On click button runs submit function.
            $submit.on('click', (e) =>{
                submit($(e.target))
            })
            let input = $input.val()
            if (input === $prompt.text()) {
                op.health -= this.strength;
                score += 100;
            } else if (input != $prompt.text()){
                op.attack(player);
                score -= 50;
            }  
        
        }
    }
   
    //player stats
    const player = new Player('Type Slayer', 100, 20);
    //generate random level of monsters to fight
    const randomLevel = [];
    for (let i = 0; i < 6; i++) {
        randomLevel.push(new Enemy(Enemy.name + i));
    } 

    //modal message function. From modal lesson.
    const showModal = (message) => {
        $('#modal-textbox').text(message);
        $('#modal').css('display', 'flex');
    }
    //player score starts at 0
    let score = 0;
    //creating dom with jquery
    const $health = $('<div>').addClass('health')
    const $header = $('<header>').addClass('header')
    const $footer = $('<footer>').addClass('footer')
    const $interact = $('<div>').addClass('inter')
    const $input  = $('<input>').addClass('input')
    const $submit = $('<button>').addClass('submit').html('submit')
    const $score = $('<div>').addClass('score').text(score)
    const $prompt = $('<div>').addClass('prompt')
    $health.appendTo($header)
    $header.appendTo('body')
    $input.appendTo($interact)
    $submit.appendTo($interact)

    //show healthbar
    const showHealth = (user) => {
        for (let i = 0; i < 5; i++){
            const $fifth = $('<div>').addClass('fifth');
            $fifth.appendTo($health)
            if (user.health < 80){
                $fifth.remove()
            }
            if (user.health < 60){
                $fifth.remove()
            }
            if (user.health < 40){
                $fifth.remove()
            }
            if (user.health < 20){
                $fifth.remove()
            }
        }
    }
    
    const $start = $('<button>').addClass('start').text('start')
        $start.on('click', (e) =>{
            gameStart($(e.target))
        })
    
        $('body').append('<br>')
        $start.appendTo($('body'))
        $score.appendTo($footer)
        $footer.appendTo('body')

        const gameStart = () => {
            showHealth(player);
            $prompt.appendTo($('body'))
            $interact.appendTo($('body'))
            $prompt.text(words[Math.floor(Math.random()*(words.length))])
            $start.remove()
        }

    //runs through full list of enemies
    for(let i = 0; i < randomLevel.length; i++){
        //start with enemy 1
        let enemy = randomLevel[i];
        if(player.health > 0 && enemy.health > 0) {
            //function submit. when button pressed compare input to prompt. if else statement for player interaction.  
            player.playerAttack(enemy)
        }    

        if (player.health <= 0){
            showModal("You Lose");
            break;
        }

        if (enemy.health <= 0){
            showModal(enemy.name + " has been slain");
            break;
        }
            
        if (i == randomLevel.length -1) {
            break;
        }
        $submit.clicked
    }
})
    
