'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var COLOR = 'rgba(0, 0, 0, .1)';
  var SCALE = 0.5;

  var drawFractal = function(x, y, radius, angle = 0, recursiveLayer = 0) {
    GLB.Draw.circle({x, y, radius, color: COLOR});
    if (radius > 2 && recursiveLayer < 4) {
      var timeThing = Math.sin(performance.now() / 1000) / 4 + 0.25 // between 0 and 0.5

      var currentBranchCount = 6 * timeThing + 1; // between 1 and 5

      var offsetAngle = Math.PI * timeThing;
      var newX = x + radius * Math.cos(angle);
      var newY = y + radius * Math.sin(angle);
      drawFractal(newX, newY, radius * SCALE, offsetAngle + angle, recursiveLayer + 1)

      _.times(Math.floor(currentBranchCount), function (number) {
        var rotation = Math.PI * 2 * (number + 1) / currentBranchCount;
        var offsetAngle = Math.PI * timeThing;

        var newX = x + radius * Math.cos(angle + rotation);
        var newY = y + radius * Math.sin(angle + rotation);

        drawFractal(newX, newY, radius * SCALE, offsetAngle + angle, recursiveLayer + 1)
      })
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
