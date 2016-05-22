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

    var title = function({ text, fontSize, fontFamily, x, y, textAlign, color, textBaseline }){
      context.font         = `${fontSize} ${fontFamily}`;
      context.textAlign    = textAlign;
      context.textBaseline = textBaseline;
      context.fillStyle    = color;

      context.fillText(text, x, y);
    }

    return {
      circle,
      title
    }
  }

  GLB.Draw = Draw();
})();
