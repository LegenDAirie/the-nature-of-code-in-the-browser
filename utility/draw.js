'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var Draw = function(){

    var context = GLB.context;

    var circle = function({ x, y, radius, color }){

      context.beginPath();
      context.fillStyle = color;
      context.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2,
        false
      );
      context.stroke();
      context.fill();
    };

    var text = function({ text, fontSize, fontFamily, x, y, textAlign, color, textBaseline, greyOut }){
      if (greyOut){
        GLB.Draw.rectangle({
          startX: 0,
          startY: 0,
          endX: GLB.canvas.width,
          endY: GLB.canvas.height,
          color: 'rgba(175, 175, 175, 0.1)'
        });
      }

      context.font         = `${fontSize} ${fontFamily}`;
      context.textAlign    = textAlign;
      context.textBaseline = textBaseline;
      context.fillStyle    = color;

      context.fillText(text, x, y);
    };

    var line = function({ endX, endY, width, startX, startY }){
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.stroke();
    };

    var rectangle = function({ startX, startY, endX, endY, color }){
      context.beginPath();
      context.fillStyle = color;
      context.fillRect(startX, startY, endX, endY);
      context.stroke();

    };

    return {
      circle,
      text,
      line,
      rectangle
    }
  }

  GLB.Draw = Draw();
})();
