class ENEMY {

    constructor(x,y,width,height){

        var options={
            isStatic:false,
            restituiton:0.2,
            density:0.1,
            friction:1.5
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("images/Monster-02.png");
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    } 

    show(){
        var pos=this.body.position;
        var angle=this.body.angle;
 
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}