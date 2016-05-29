'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var title = GLB.Title.create("Vector Magnitude")
  var mouse = GLB.Vector.create({x: 0, y: 0});
  var center = GLB.Vector.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2
  });


  GLB.simulationLogic = {
    init: function(){
      GLB.canvas.addEventListener('mousemove', function(event){
        mouse = GLB.Vector.create({x: event.x, y: event.y});
        mouse = mouse.subtract(center)

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
      GLB.Draw.rectangle({
        startX: 1,
        startY: 1,
        endX:   mouse.magnitude(),
        endY:   10,
        color:  "rgba(255, 127, 127, 0.1)",
        border: true
      });
    },

    displayTitle: function(){
      title.display();
    },
  }
})();
