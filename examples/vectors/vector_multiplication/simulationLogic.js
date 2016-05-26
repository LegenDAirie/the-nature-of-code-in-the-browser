'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var title = GLB.Title.create("Vector Multiplication");

  var mouse = GLB.Vector.create({x: 0, y: 0});
  var center = GLB.Vector.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2
  });

  var line = GLB.Line.create({start: 0, end: 0});



  GLB.simulationLogic = {

    init: function(){
      GLB.canvas.addEventListener('mousemove', function(event){
        mouse = GLB.Vector.create({x: event.x, y: event.y});

        var end = mouse.sub(center);
        end = end.multiply(0.5);
        line.update({start: center, end: end.add(center)})
      });
    },

    update: function(){
    },

    draw: function(){
      line.draw();
    },

    displayTitle: function(){
      title.display();
    }
  }
})();
