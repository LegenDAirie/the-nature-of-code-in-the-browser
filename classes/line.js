'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var LINE_PROTOTYPE = {
    draw: function(){
      GLB.Draw.line({
        start: this.start,
        end:   this.end,
        width: this.width
      });
    },

    update: function({ start, end }){
      this.start = GLB.Vector.create({x: start.x, y: start.y});
      this.end   = GLB.Vector.create({x: end.x, y: end.y});
    }
  };

  GLB.Line = {
    create: function({ start, end, width = "1px" }){
      var line = Object.create(LINE_PROTOTYPE);

      line.start = GLB.Vector.create({x: start.x, y: start.y});
      line.end   = GLB.Vector.create({x: end.x, y: end.y});
      line.width = width;

      return line;
    }
  };
})();
