'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var G = 0.5; //gravitational constant

  var rectangles = [];

  var attractor = GLB.Attractor.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2,
    radius: 20,
    mass: 3000,
  });

  _.times(8, function(){
    var rect = GLB.Rectangle.createRandom();
    rect.velocity = rect.velocity.multiply(1);
    rectangles.push(rect);
  });

  GLB.simulationLogic = {

    update: function(){
      _.forEach(rectangles, function(rect){

        var attraction = attractor.calculateForce({object: rect, G});

        GLB.Force.applyForce({object: rect, force: attraction});

        rect.angularAcceleration = rect.acceleration.x;
        rect.angularVelocity = _.clamp(rect.angularAcceleration, -10, 10)
        rect.update();
        rect.acceleration = rect.acceleration.multiply(0);
      });
    },

    draw: function(){
      _.forEach(rectangles, function(rect){
        rect.draw();
      });

      attractor.draw();
    },
  }
})();
