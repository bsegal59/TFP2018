class Character{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.health=100;
    }
    damage(){
        this.health= this.health-10;
    }
    getHealth(){
        return this.health;
    }
    toString(){
        return "x: "+this.x + " y: " +this.y+ " health: " + this.getHealth();
    }

}

var x = process.argv[2];
var y = process.argv[3];

let character = new Character(+x,+y);
character.damage();
console.log(character.toString())

