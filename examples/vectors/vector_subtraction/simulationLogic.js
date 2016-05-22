'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var title = GLB.Title.create("Vector Subtraction");

  var line = GLB.Line.create({
    startX: GLB.canvas.width / 2,
    startY: GLB.canvas.height / 2,
    endX:   300,
    endY:   300
  });

  GLB.simulationLogic = {

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
