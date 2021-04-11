class slingshot {

constructor (bodyA, bodyB) {
    var options = {

        bodyA: bird.body,
        bodyB: newlog.body,
        
        length: 30,
        stiffness: 0.04
        }
        
        this.constainet = Constraint.create(options);
        World.add(world,this.constainet);


    }

   display(){


    strokeWeight(5);
    line(this.constainet.bodyA.position.x,this.constainet.bodyA.position.y, this.constainet.bodyB.position.x , this.constainet.bodyB.position.y);
   }

}