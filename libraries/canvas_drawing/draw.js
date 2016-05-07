'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  GLB.Draw = {
    circle: function(x, y, radius, color){
      var context = GLB.context
      context.beginPath();
      context.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      );
      context.stroke();
    }
  }
})();
