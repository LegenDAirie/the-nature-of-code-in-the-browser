'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};


  var mouse  = GLB.Vector.create({x: 0, y: 0});
  var end    = GLB.Vector.create({x: 0, y: 0});
  var center = GLB.Vector.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2
  });



  GLB.simulationLogic = {

    init: function(){
      GLB.canvas.addEventListener('mousemove', function(event){
        mouse = GLB.Vector.create({x: event.x, y: event.y});
        end = mouse.subtract(center);
        end = end.multiply(0.5);

        // line.update({start: center, end: end.add(center)})
      });
    },

    update: function(){
      center = GLB.Vector.create({
        x: GLB.canvas.width / 2,
        y: GLB.canvas.height / 2
      });
    },

    draw: function(){
      GLB.Draw.line({start: center, end: end.add(center)});
      // line.draw();
    },

  }
})();
