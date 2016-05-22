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
    }

    var text = function({ text, fontSize, fontFamily, x, y, textAlign, color, textBaseline }){
      context.font         = `${fontSize} ${fontFamily}`;
      context.textAlign    = textAlign;
      context.textBaseline = textBaseline;
      context.fillStyle    = color;

      context.fillText(text, x, y);
    }

    var line = function({ endX, endY, width, startX, startY }){
      console.log(endX, endY, width, startX, startY);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.stroke();
    };

    return {
      circle,
      text,
      line
    }
  }

  GLB.Draw = Draw();
})();
