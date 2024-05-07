var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 

var imp;
let sq1;
let sq2;
let blocks = [];
let coins = [];
class Player {
    constructor(x, y, h, w, c, s)
    {
        this.x = x;
        this.y = y;
        //height
        this.h = h;
        //width
        this.w = w;
        //color
        this.c = c;
        //speed
        this.s = s;

    }
    SetX(coord){
        this.x = coord;
    }
    SetY(y){
        this.y = y;
    }
    SetH(h){
        this.h = h;
    }
    SetW(w){
        this.w = w;
    }
    SetC(c){
        this.c = c;
    }
    
}
class Block {
    constructor(x, y, h, w, c, s)
    {
        this.x = x;
        this.y = y;
        //height
        this.h = h;
        //width
        this.w = w;
        //color
        this.c = c;
        //speed
        this.s = s;

    }
    SetX(x){
        this.x = x;
    }
    SetY(y){
        this.y = y;
    }
    SetH(h){
        this.h = h;
    }
    SetW(w){
        this.w = w;
    }
    SetC(c){
        this.c = c;
    }
}

class Collect {
    constructor(x, y, h, w, c, s)
    {
        this.x = x;
        this.y = y;
        //height
        this.h = h;
        //width
        this.w = w;
        //color
        this.c = c;
        //speed
        this.s = s;

    }
    SetX(x){
        this.x = x;
    }
    SetY(y){
        this.y = y;
    }
    SetH(h){
        this.h = h;
    }
    SetW(w){
        this.w = w;
    }
    SetC(c){
        this.c = c;
    }
}
console.log(1);

console.log(2);


 

var keyArr = ["w", "s", "a", "d"]
var speed = 10;
var condition = "skyblue";
var updateCount = 0;
var lastX;
var gameState = true;
var score = 0;

setInterval(update, 1000/60);





//init
ctx.fillStyle = "0000FF";
function initializeObj(data) {
    
    sq1 = new Player(data.player.x, data.player.y, data.player.w, data.player.h, data.player.c, data.player.s);
    
    blocks = data.blocks.map(block => new Block(block.x, block.y, block.h, block.w, block.c, block.s));
    coins = data.coins.map(coin => new Collect(coin.x, coin.y, coin.h, coin.w, coin.c, coin.s));

    
    
}

//update
function update() {
    
    frameRefresh();
    updateSquare();
    //game state
    if(score >= coins.length) {
        gameOver("w");
    }
    else if(!gameState){
        gameOver("f");
    }
    
    updateScore();
    
 
}

function keyControl(object, key) {
    
    
    switch (key) {
        case "a":
            if(object.x > object.s) {
                
                object.SetX(object.x-object.s); 
            }
            
            break
        case "d":
            if(object.x < canvas.width - object.w - object.s) {
                
                object.SetX(object.x+object.s); 
                
            }
            
            break
        case "w":
            if(object.y > object.s) {
                object.SetY(object.y-object.s); 
        }
            break
        case "s":
            if(object.y < canvas.height - object.h - object.s) {
                object.SetY(object.y+object.s); 
            }
            break
    }
}

function updateSquare() {
    
    ctx.fillStyle = sq1.c;
    
    ctx.fillRect(sq1.x, sq1.y, sq1.h, sq1.w);
    var array = blocks;
    array.forEach(element => {
        ctx.fillStyle = element.c;
        ctx.fillRect(element.x, element.y, element.h, element.w);
    });
    var array = coins;
    array.forEach(element => {
        ctx.fillStyle = element.c;
        ctx.fillRect(element.x, element.y, element.h, element.w);
    });
    
}

function destroy(object) {
    object.w = 0;
    object.h = 0;
    object.x = 0;
    object.y = 0;
}

function updateScore() {
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText(score, 10, canvas.height - 50);
}

function gameOver(state) {

    switch (state) {
        case "w":
            ctx.font = 'italic 32px sans-serif';
            ctx.fillText('You Win', 10, 50);

            break
        case "f":
            ctx.font = 'italic 32px sans-serif';
            ctx.fillText('You Lost', 10, 50);
            break
}
    }
    




function frameRefresh() {
    ctx.fillStyle = condition;
    ctx.fillRect(0,0,800,600);
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 15;
    
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}



function hasCollided(object1, object2) {
    //console.log("Function Called");
    
    return !(
        ((object1.y + object1.h) < (object2.y)) ||
        (object1.y > (object2.y + object2.h)) ||
        ((object1.x + object1.w) < object2.x) ||
        (object1.x > (object2.x + object2.w))
    );
}

document.addEventListener('keydown', function(event) {
    var canMove = true;
    
    for(let i = 0; i < blocks.length; i++){
        
        if(hasCollided(sq1, blocks[i])) {
            
            canMove = false;
            gameState = false;
        }
    }

    for(let i = 0; i < coins.length; i++){
        
        if(hasCollided(sq1, coins[i])) {
            
            score++;
            destroy(coins[i]);
        }
    }

    if(canMove){
        keyControl(sq1, event.key);
    }
    
    update();
});


$.getJSON("squares.json", function(data) {
    initializeObj(data);
}).fail(function() {
    console.error("Fail");
});