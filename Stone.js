class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,30);
      this.image = loadImage("rock.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }
  