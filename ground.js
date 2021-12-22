class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
display()
  {
    var groundPos = this.body.position;
    Push()
    translate(groundPos.x,groundPos.y);
    rectMode(CENTER);
    strokeWeight(4);
    Fill(yellow);
    rect(0,0,this.w,this.h);
    Pop()
  }
  
  
}


