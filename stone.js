class stone{
    constructor(x,y,r){
        var options={
'restitution':0,
'density':1,
'friction':1.2,

        }
this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)
this.image=loadImage("images/stone.png")
    }
    display(){
        var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 
    }
}