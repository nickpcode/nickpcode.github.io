
$(() => {
    //player stats
    const player = {
        name: "Type Slayer",
        health: 100,
        weapons: ["chainsaw", "bfg9000"]
    }
    //declaring array for all typing words. Random selection
    const words = ['air', 'answer', 'being', 'miss', 'year', 'I', 'move', 'eat', 'always', 'away', 'sun', 'get', 'great', 'air', 'page', 'feet', 'different', 'had', 'without', 'study', 'mile', 'think', 'need', 'let', 'mean', 'went', 'almost', 'to', 'how', 'them', 'upon', 'when', 'kind', 'it', 'are', 'about', 'call', 'food', 'air', 'or', 'example', 'state', 'cut', 'may', 'hand', 'would', 'should', 'work', 'good', 'sun', 'form', 'see', 'also', 'different', 'grow', 'get', 'few', 'began', 'find', 'no', 'carry', 'sun', 'through', 'say', 'but', 'those', 'been', 'follow', 'see', 'most', 'point', 'call', 'small', 'back', 'another', 'he', 'that', 'answer', 'time', 'plant', 'went', 'pizazz', 'piazzas', 'pizzas', 'suburban', 'assuming', 'obstinance', 'foramens'];
//create enemies class and list of enemies for game
    class Enemy {
        constructor(name, health, strength) {
            this.name = "Dungeon Monster";
            this.health = Math.floor(Math.random() * 21) + 30;
            this.strength = Math.floor(Math.random() * 4) + 9; 
        }
            attack = (player) => {
                playerHealth -= this.strength
            }
    }
    
    const playerAttack = () => {
        if (player.weapon == "chainsaw"){ 
            enemy.this.health -= 10
        } else if (player.weapon == "bfg9000"){
            enemy.this.health -= 20
        }
    }
    //function submit. when button pressed compare input to prompt. if else statement for player interaction.  
    const submit = () => {
        if ($input.val == $prompt.val){
            playerAttack()
        } else if ($input.val != $prompt.val) {
            attack()
        }
        $input.val('')
        $prompt.text(words[Math.floor(Math.random()*(words.length))])
        console.log(player.health)
    }
    //line break between prompt and input
    
    //creating div where word to type is displayed
    const $prompt = $('<div>').addClass('prompt').text(words[Math.floor(Math.random()*(words.length))])
    
    const $input  = $('<input>').addClass('input')
    const $break = $('<br>')
    const $submit = $('<button>').addClass('submit').text('submit')
    //code referenced from tic tac toe assignment. On click button runs submit function.
    $submit.on('click', (e) =>{
        submit($(e.target))
    })
    $input.appendTo($('body'))
    $submit.appendTo($('body'))
    $break.appendTo($('body'))
    $prompt.appendTo($('body'))

    //code pulled from spacebattle code
    const randomLevel = [];
    for (let i = 0; i < 7; i++) {
      randomLevel.push(new Enemy());
    }
    
    console.log(randomLevel)
})