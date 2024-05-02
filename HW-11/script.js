class Square {
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
    SetX(y){
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
    keyControl(key) {
        switch (key) {
            case "a":
                if(this.x > this.s) {
                    this.x-=this.s;
                }
                
                break
            case "d":
                if(this.x < canvas.width - this.w - this.s) {
                    this.x+=this.s;
                }
                
                break
            case "w":
                if(this.y > this.s) {
                this.y-=this.s; 
            }
                break
            case "s":
                if(this.y < canvas.height - this.h - this.s) {
                this.y+=this.s; 
                }
                break
        }
    }
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 

var x = 50;
var y = 50;
var x1 = 250;
var y1 = 250;
var keyArr = ["w", "s", "a", "d"]
var speed = 10;
var condition = "skyblue";

setInterval(update, 1000/60);
ctx.fillStyle = "0000FF";

var sq1 = new Square(x, y, 30,30, "orange", 5);
var sq2 = new Square(x1, y1, 50, 50, "green", 10);

function update() {

    updateSquare();
    sq2move();
    var didCollide = hasCollided(sq1, sq2);
  if(didCollide)
    {
      condition = "pink";
      sq2.h = 10;
      sq2.w = 10;
    }

}



function updateSquare() {
    
    frameRefresh();
    
    ctx.fillStyle = sq1.c;
    ctx.fillRect(sq1.x, sq1.y, sq1.h, sq1.w);
    
    ctx.fillStyle = sq2.c;
    ctx.fillRect(sq2.x, sq2.y, sq2.h, sq2.w);
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    
    var char = event.key;
    
    sq1.keyControl(char);
}
function sq2move() {
    var randKey = keyArr[Math.floor(Math.random() * keyArr.length)];
    //var randKey;
    sq2.keyControl(randKey);

    //console.log(x1 + "," + y1 + "," + randKey);
}
function frameRefresh() {
    ctx.fillStyle = condition;
    ctx.fillRect(0,0,800,600);
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 15;
    
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.h) < (object2.y)) ||
        (object1.y > (object2.y + object2.h)) ||
        ((object1.x + object1.w) < object2.x) ||
        (object1.x > (object2.x + object2.w))
    );
}