class Boy{
    constructor(x, y,height,width) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, height,width, options);
        this.height = height;
        this.width = width;

        this.image = loadImage("Boy1.png");
        World.add(world, this.body);
      }
      display(){
        image(this.image,190,200);
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.height,this.width);
        pop();
      }
}