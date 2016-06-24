'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  const STARTING_POINT_Y = GLB.canvas.height / 4;

  const WIND    = GLB.Vector.create({x: 20, y: 0});
  const GRAVITY = GLB.Vector.create({x: 0, y: 0.1});

  const C = 20; //coefficient of friction


  var balls = [];

  _.times(10, function(){
    var ball = GLB.Ball.create({
      x: _.random(30, GLB.canvas.width * 0.75),
      y: STARTING_POINT_Y,
      radius: _.random(10, 30)
    });

    ball.location.y = ball.location.y - ball.radius;

    balls.push(ball);
  });

  GLB.simulationLogic = {

    update: function(){
      _.forEach(balls, function(ball){
        var friction = ball.velocity.returnNegativeCopy();
        friction = friction.normalize();
        friction = friction.multiply(C);


        var GravitationalForce = GRAVITY.multiply(ball.mass);
        var NetForce = GLB.Force.calculateForce([WIND, GravitationalForce, friction]);
        GLB.Force.applyNetForce({object: ball, NetForce});

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
