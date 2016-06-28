'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var rightDistanceAway = function(distance, self, object){
    return distance > object.radius + self.radius
  };

  var calculateForce = function(self, object){

    var direction = self.location.subtract(object.location);
    var distance = direction.magnitude();
    var force = GLB.Vector.create({x: 0, y: 0});

    if (rightDistanceAway(distance, self, object)){
      var strength = self.mass / (distance * distance);
      force = direction.normalize().multiply(strength);
    }
    return force;
  };

  var ATTRACTOR_PROTOTYPE = {
    applyForce: function({ object }){
      var force = calculateForce(this, object);

      object.acceleration = object.acceleration.add(force);
    },

    draw: function(){

      GLB.Draw.circle({
        x:      this.location.x,
        y:      this.location.y,
        radius: this.radius,
        color:  this.color
      });
    }
  };

  GLB.Attractor = {
    create: function({ x, y, radius, color, mass }){
      var attractor = Object.create(ATTRACTOR_PROTOTYPE);

      attractor.location     = GLB.Vector.create({x: x, y: y});
      attractor.radius       = radius || 20;

      var r = color && color.r || 1;
      var g = color && color.g || 1;
      var b = color && color.b || 1;
      var a = color && color.a || 0.75;

      attractor.color = `rgba(${r}, ${g}, ${b}, ${a})`;

      attractor.mass = mass || radius * radius * Math.PI;

      return attractor;
    },

    createRandom: function(){
      var x        = _.random(0, GLB.canvas.width);
      var y        = _.random(0, GLB.canvas.height);
      var radius   = _.random(5, 20);
      var mass     = radius * radius * Math.PI;

      return GLB.Attractor.create({x, y, radius, mass});
    }
  };
})();
