'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var Force = function(){

    var rightDistanceAway = function(distance, self, object){
      return distance > object.radius + self.radius
    };

    var calculateForce = function(self, object, G){

      var direction = object.location.subtract(self.location);
      var distance = direction.magnitude();
      var force = GLB.Vector.create({x: 0, y: 0});

      if (rightDistanceAway(distance, self, object)){
        var strength = (self.mass * object.mass) / (distance * distance); // gravitational attraction
        force = direction.normalize().multiply(strength);
        force = force.multiply(G);
      }

      return force;
    };

    var applyForce = function(object, force){
      force = force || GLB.Vector.create({x: 0, y: 0});

      force = force.divide(object.mass);
      object.acceleration = object.acceleration.add(force);
    };

    var everythingAttractsEverything = function({ objects, G }){ // G is the gravitational constant
      objects = objects || []

      _.forEach(objects, function(object){
        _.forEach(objects, function(otherObject){
          if (object != otherObject){
            var force = calculateForce(object, otherObject, G);
            applyForce(object, force);
          }
        });
      });
    };

    return {
      everythingAttractsEverything
    };
  }

  GLB.Force = Force();
})();
