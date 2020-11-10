class Floor {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,400,20, options );
        this.width = 400;
    this.height = 20;
    
    World.add(world, this.body);
    }
        activate(){
            var pos =this.body.position;
            push ();
            rectMode(CENTER);
            fill("brown");
            rect(pos.x, pos.y, this.width, this.height);
            pop();

        }
};