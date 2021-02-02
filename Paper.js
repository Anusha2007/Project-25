class Paper
{
	constructor(x,y,diameter,options)
	{
		var options={
        restitution:0.3,
        friction:0.5,
        density:1.2 
        }			
			
		this.body=Bodies.circle(x, y, diameter, options);
 		World.add(world, this.body);
        this.image = loadImage("paper.png");
	}
	display()
	{      var pos=this.body.position;		

			push()
			translate(pos.x,pos.y,pos.diameter);
			rectMode(CENTER)
			//strokeWeight(4);
			ellipse(0,0,width);
			pop()
			
	}

}