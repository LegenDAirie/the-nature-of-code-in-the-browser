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

    var text = function({ text, fontSize, fontFamily, x, y, textAlign, color, textBaseline }){
      context.font         = `${fontSize} ${fontFamily}`;
      context.textAlign    = textAlign;
      context.textBaseline = textBaseline;
      context.fillStyle    = color;

      context.fillText(text, x, y);
    };

    var line = function({ start, end, width }){
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
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
