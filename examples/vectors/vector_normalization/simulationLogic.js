'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};


  var mouse  = GLB.Vector.create({x: 0, y: 0});
  var center = GLB.Vector.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2
  });


  GLB.simulationLogic = {
    init: function(){
      GLB.canvas.addEventListener('mousemove', function(event){
        mouse = GLB.Vector.create({x: event.x, y: event.y});
        mouse = mouse.subtract(center);
        mouse = mouse.normalize();
        mouse = mouse.multiply(100);
      });
    },

    update: function(){
      center = GLB.Vector.create({
        x: GLB.canvas.width / 2,
        y: GLB.canvas.height / 2
      });
    },

    draw: function(){
      GLB.Draw.line({start: center, end: mouse.add(center)});
      GLB.Draw.circle({x: center.x, y: center.y, radius: 100, color: "rgba(255, 127, 127, 0.1)"});
    },

  };

})();
