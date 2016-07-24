'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  const rect = GLB.Rectangle.createRandom();
  rect.angularVelocity = 0.1;

  GLB.simulationLogic = {

    update: function(){

      rect.update();
      GLB.Screen_edges.wrap_around_screen(rect);
    },

    draw: function(){

      rect.draw();
    },
  }
})();
