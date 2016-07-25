'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var rect = GLB.Rectangle.create({
    x:       GLB.canvas / 2,
    y:       GLB.canvas / 2,
    width:   30,
    height:  10
  });

  var topSpeed = 5;
  var mouse = GLB.Vector.create({x: 0, y: 0});

  GLB.simulationLogic = {

    init: function(){
      GLB.canvas.addEventListener('mousemove', function(event){
        mouse = GLB.Vector.create({x: event.x, y: event.y});
      });
    },

    update: function(){
      rect.acceleration = mouse.subtract(rect.location);
      rect.acceleration = rect.acceleration.normalize();
      rect.acceleration = rect.acceleration.multiply(0.1);
      rect.update();
      rect.velocity = rect.velocity.limit(topSpeed);
    },

    draw: function(){
      rect.draw();
    },
  }
})();
