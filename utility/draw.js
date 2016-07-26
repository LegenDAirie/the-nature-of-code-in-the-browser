'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var Draw = function(){

    var context = GLB.context;

    var circle = function({ x = 0, y = 0, radius, color }){

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

    var rectangle = function({ startX, startY, endX, endY, color, border = false }){
      context.beginPath();
      context.rect(startX, startY, endX, endY);
      context.fillStyle = color;
      context.fill();

      if (border){
        context.lineWidth = 1;
        context.strokeStyle = "rgba(0, 0, 0, 1)";
        context.stroke();
      }
    };

    var ellipse = function({ x = 0, y = 0, radiusX, radiusY, rotation = 0, color }) {
      context.beginPath();
      context.fillStyle = color;
      context.ellipse(
        x,
        y,
        radiusX,
        radiusY,
        0,
        0,
        Math.PI * 2
      );

      context.stroke();
      context.fill();
    };

    var greyOut = function(){
      GLB.Draw.rectangle({
        startX: 0,
        startY: 0,
        endX: GLB.canvas.width,
        endY: GLB.canvas.height,
        color: 'rgba(175, 175, 175, 0.1)'
      });
    };


    return {
      circle,
      text,
      line,
      rectangle,
      greyOut,
      ellipse
    }
  }

  GLB.Draw = Draw();
})();
