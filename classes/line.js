'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var LINE_PROTOTYPE = {
    draw: function(){
      GLB.Draw.line({
        endX:   this.end.x,
        endY:   this.end.y,
        startX: this.start.x,
        startY: this.start.y,
        width:  this.width
      });
    }

    // update: function({ startX, startY, endX, endY }){
    //   this.start = GLB.Vector.create({x: startX, y: endY});
    //   this.end   = GLB.Vector.create({x: endX, y: endY});
    // }
  }

  GLB.Line = {
    create: function({ startX, startY, endX, endY, width }){
      var line = Object.create(LINE_PROTOTYPE);

      line.end   = GLB.Vector.create({x: endX, y: endY});
      line.start = GLB.Vector.create({x: startX, y: startY});
      line.width = width;

      return line;
    }
  }
})();
