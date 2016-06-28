'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  const STARTING_POINT_X = GLB.canvas.width / 5;
  const STARTING_POINT_Y = GLB.canvas.height / 4;

  const WIND = GLB.Vector.create({x: 5, y: 0});
  const GRAVITY = GLB.Vector.create({x: 0, y: 0.02});

  var balls = [];

  _.times(10, function(){
    var ball = GLB.Ball.create({
      x: STARTING_POINT_X,
      y: STARTING_POINT_Y,
      radius: _.random(10, 30)
    });
    ball.location.y = ball.location.y - ball.radius;

    var gravity = GRAVITY.multiply(ball.mass);

    GLB.Force.applyForce({object: ball, force: WIND});
    GLB.Force.applyForce({object: ball, force: gravity});

    balls.push(ball);
  });


  GLB.simulationLogic = {

    update: function(){
      _.forEach(balls, function(ball){
        ball.update();
        GLB.Screen_edges.reflect_off_edges(ball);
      });
    },

    draw: function(){
      _.forEach(balls, function(ball){
        ball.draw();
      });
    },
  }
})();
