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