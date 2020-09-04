class paper{
    constructor(x, y, width, height) {
        var options = {
          'isStatic':false,
            'restitution':0.9,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
       
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke(250,255,0)
        fill(250,255,0);
        circle(0, 0, this.width,this.height);
        pop();
      }

    
}
