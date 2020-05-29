class Raindrop{
    constructor(x, y,width,height) {
    
        this.body = Bodies.rectangle(x, y,width,height);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }

    display() {
        rectMode(CENTER);
        rect(this.body.position.y,this.body.position.x, this.width, this.height);
        fill("purple");
        if(player.body.position.y == 20){
            fill("red");
        }
        if(player.body.position.x == 200){
            fill("green");
        }
        this.body.velocityX = 0;
        this.body.velocityY = 2;
    }
}