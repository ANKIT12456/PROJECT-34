class SLING{
    
    constructor(bodyA,pointB){
        var options={
            stiffness:0.05,
            length:10,
            bodyA:bodyA,
            pointB:pointB
        }

        this.bodyA=bodyA;
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA){
        var posa=this.sling.bodyA.position;
        var posb=this.pointB;
        strokeWeight(0);
        line(posa.x,posa.y,posb.x,posb.y);
        }

    }
}