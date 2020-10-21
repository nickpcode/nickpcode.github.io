$(() => {

    //declaring array for all typing words. Random selection
    const words = ['air', 'answer', 'being', 'miss', 'year', 'I', 'move', 'eat', 'always', 'away', 'sun', 'get', 'great', 'air', 'page', 'feet', 'different', 'had', 'without', 'study', 'mile', 'think', 'need', 'let', 'mean', 'went', 'almost', 'to', 'how', 'them', 'upon', 'when', 'kind', 'it', 'are', 'about', 'call', 'food', 'air', 'or', 'example', 'state', 'cut', 'may', 'hand', 'would', 'should', 'work', 'good', 'sun', 'form', 'see', 'also', 'different', 'grow', 'get', 'few', 'began', 'find', 'no', 'carry', 'sun', 'through', 'say', 'but', 'those', 'been', 'follow', 'see', 'most', 'point', 'call', 'small', 'back', 'another', 'he', 'that', 'answer', 'time', 'plant', 'went', 'pizazz', 'piazzas', 'pizzas', 'suburban', 'assuming', 'obstinance', 'foramens'];

    const images = ['../images/BallAndChainTrooper.png', '../images/Bomb-Knight-Sprite.png', '../images/Hinox-Sprite-1.png', '../images/Stalfos-Knight-1.png'];
    
    //create character class
    class Character{
        constructor(name, health, strength, image) {
            this.name = name
            this.health = health
            this.strength = strength;
            this.image = image
        }
    }

     //create enemy class
    class Enemy extends Character {
        constructor() {
            let name = "Dungeon Monster";
            //randomized health and strength
            let health = Math.floor(Math.random() * 21) + 30;
            let strength = Math.floor(Math.random() * 4) + 9;
            let image = images[Math.floor(Math.random() * 4 )] 
            super(name, health, strength, image);
        }

    //function to attack player reducing player health by enemy strength
        attack (op) {
            op.health -= this.strength
            showModal("You got hit for " + this.strength + " health")
        }
    }

    //create player
    class Player extends Character {
        playerAttack (en) {
            const submit = () => {
                this.playerAttack(en);
                $input.val('')
                $prompt.text(words[Math.floor(Math.random()*(words.length))])
                showModal(en.name + " has " + en.health + " health")
                console.log(player.health)
            }
            // //code referenced from tic tac toe assignment. On click button runs submit function.
            $submit.on('click', (e) => {
                submit($(e.target))
                const input = $input.val();
                if (input === $prompt.text()) {
                    en.health -= this.strength;
                    score += 100;
                } else if (input != $prompt.text()){
                    en.attack(player);
                    score -= 50;
                }  
                console.log(input)
                console.log($prompt.text())
            })
            
        }
    }

    //player stats
    const player = new Player('Type Slayer', 100, 20, '../images/bfg_9000_by_owmander_ddujo64-350t.png');

    //generate random level of monsters to fight
    const randomLevel = [];
    for (let i = 0; i < 7; i++) {
        randomLevel.push(new Enemy(Enemy.name + i));
        console.log(randomLevel[i])
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
                $fifth.toggleClass('none')
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