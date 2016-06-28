'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  const STARTING_POINT_OF_BALLS_Y = GLB.canvas.height / 4;
  const GRAVITY = GLB.Vector.create({x: 0, y: 0.1});

  var balls = [];

  var liquid = GLB.Field.create({
    TopLeftX:     0,
    TopLeftY:     GLB.canvas.height * 0.75,
    bottomRightX: GLB.canvas.width,
    bottomRightY: GLB.canvas.height,
    color:        { r: 1, g: 1, b: 1, a: 0.2},
    coefficient:  40
  });

  _.times(10, function(){
    var ball = GLB.Ball.create({
      x:      _.random(30, GLB.canvas.width),
      y:      STARTING_POINT_OF_BALLS_Y,
      radius: _.random(10, 30)
    });

    ball.location.y = ball.location.y - ball.radius;

    balls.push(ball);
  });

  GLB.simulationLogic = {
    init: function(){
      window.addEventListener("resize", function(){

        liquid = GLB.Field.create({
          TopLeftX:     0,
          TopLeftY:     GLB.canvas.height * 0.75,
          bottomRightX: GLB.canvas.width,
          bottomRightY: GLB.canvas.height,
          color:        { r: 1, g: 1, b: 1, a: 0.2},
          coefficient:  800
        });
      })
    },

    update: function(){
      _.forEach(balls, function(ball){
        var resistance = liquid.calculateForce({object: ball});
        var gravity = GRAVITY.multiply(ball.mass);
        GLB.Force.applyForce({object: ball, force: gravity});
        GLB.Force.applyForce({object: ball, force: resistance});

        ball.update();
        ball.acceleration = ball.acceleration.multiply(0);
        GLB.Screen_edges.reflect_off_edges(ball);
      });
    },

    draw: function(){
      _.forEach(balls, function(ball){
        ball.draw();
      });

      liquid.draw();
    },
  }
})();
