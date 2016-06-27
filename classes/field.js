'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var FIELD_PROTOTYPE = {
    draw: function(){
      GLB.Draw.rectangle({
        startX: this.TopLeftX,
        startY: this.TopLeftY,
        endX: this.bottomRightX,
        endY: this.bottomRightY,
        color: this.color,
      });
    }
  };

  GLB.Field = {
    create: function({ TopLeftX, TopLeftY, bottomRightX, bottomRightY, color }){
      var field = Object.create(FIELD_PROTOTYPE);

      field.TopLeftX     = TopLeftX;
      field.TopLeftY     = TopLeftY;
      field.bottomRightX = bottomRightX;
      field.bottomRightY = bottomRightY;

      //doesnt work if r,g,b or a is 0
      var r = color && color.r || Math.floor(Math.random() * 255);
      var g = color && color.g || Math.floor(Math.random() * 255);
      var b = color && color.b || Math.floor(Math.random() * 255);
      var a = color && color.a || 0.2;

      field.color = `rgba(${r}, ${g}, ${b}, ${a})`

      return field;
    }
  }

})();
