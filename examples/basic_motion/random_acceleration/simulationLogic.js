'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var title = GLB.Title.create("Random Acceleration");
  var ball  = GLB.Ball.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2,
    radius: 20,
    color: {r: 255, g: 127, b: 127, a: 0.2}
  });


  ball.acceleration = GLB.Vector.createRandom();


  GLB.simulationLogic = {

    update: function(){
      console.log(ball.acceleration.magnitude());
      ball.update();
      GLB.Screen_edges.wrap_around_screen(ball);
    },

    draw: function(){
      ball.draw();
    },

    displayTitle: function(){
      title.display();
    },
  }
})();
