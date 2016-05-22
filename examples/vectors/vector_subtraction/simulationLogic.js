'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var title = GLB.Title.create("Vector Subtraction");

  var mouse = GLB.Vector.create({x: 0, y: 0});

  var line = GLB.Line.create({
    startX: GLB.canvas.width / 2,
    startY: GLB.canvas.height / 2,
    endX:   300,
    endY:   300
  });

  GLB.simulationLogic = {

    init: function(){
      GLB.canvas.addEventListener('mousemove', function(event){
        mouse.location = GLB.Vector.create({x: event.x, y: event.y});
        line = GLB.Line.create({
          startX: GLB.canvas.width / 2,
          startY: GLB.canvas.height / 2,
          endX:   mouse.location.x,
          endY:   mouse.location.y
        });
      });
    },

    update: function(){
    },

    draw: function(){
      line.draw()
    },

    displayTitle: function(){
      title.display();
    }
  }
})();
