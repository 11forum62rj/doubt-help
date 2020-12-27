class Block {
    constructor(x, y, width, height){
        var options = {
            restitution:0.2,
            friction:0.5,
            density:1,
            isStatic: false
  }
       this.Visiblity = 255; 
       this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    
    display(){
      console.log(this.body.speed);
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(0.7);
      stroke("yellow");
       rect(pos.x, pos.y, this.width, this.height);
    }
};