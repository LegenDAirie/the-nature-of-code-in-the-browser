'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var COLOR = 'rgba(0, 0, 0, 0.1)';

  var drawFractal = function(x, y, radius, angle = 0, recursiveLayer = 0) {
    GLB.Draw.circle(x, y, radius, COLOR);
    if (radius > 2 && recursiveLayer < 4) {
      var timeThing = Math.sin(performance.now() / 1000) / 4 + 0.25

      var x1 = x + radius * Math.cos(angle + Math.PI * 1 / 2)
      var y1 = y + radius * Math.sin(angle + Math.PI * 1 / 2)

      var x2 = x + radius * Math.cos(angle + Math.PI * 2 / 2)
      var y2 = y + radius * Math.sin(angle + Math.PI * 2 / 2)

      var x3 = x + radius * Math.cos(angle + Math.PI * 3 / 2)
      var y3 = y + radius * Math.sin(angle + Math.PI * 3 / 2)

      var x4 = x + radius * Math.cos(angle + Math.PI * 4 / 2)
      var y4 = y + radius * Math.sin(angle + Math.PI * 4 / 2)

      var scale = 0.5;
      var offsetAngle = Math.PI * timeThing;

      drawFractal(x1, y1, radius * scale, offsetAngle + angle, recursiveLayer + 1)
      drawFractal(x2, y2, radius * scale, offsetAngle + angle, recursiveLayer + 1)
      drawFractal(x3, y3, radius * scale, offsetAngle + angle, recursiveLayer + 1)
      drawFractal(x4, y4, radius * scale, offsetAngle + angle, recursiveLayer + 1)
    }
  }


  GLB.simulationLogic = {
    update: function () {
    },

    draw: function () {
      drawFractal(GLB.canvas.width / 2, GLB.canvas.height / 2, 100)
    },

  }
})();
