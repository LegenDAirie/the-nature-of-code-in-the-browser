'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  const balls = [];
  const maxDepth = 32;

  _.times(100, function() {
    let ball = GLB.Ball.create({
      x: GLB.canvas.width / 2,
      y: GLB.canvas.height / 2,
      radius: 0,
      color: {r: 1, g: 1, b: 1, a: 1}
    });

    ball.actualPosition = {
      x:_.random(-25, 25),
      y:_.random(-25, 25),
      z:_.random(1, maxDepth)
    }

    balls.push(ball);
  });


  GLB.simulationLogic = {

    update: function() {
      _.each(balls, function(ball){
        ball.actualPosition.z = ball.actualPosition.z - 0.2;

        var k = (GLB.canvas.width / 2) / ball.actualPosition.z;
        ball.location.x = ball.actualPosition.x * k + (GLB.canvas.width / 2);
        ball.location.y = ball.actualPosition.y * k + (GLB.canvas.height / 2);

        ball.radius = (1 - ball.actualPosition.z / maxDepth) * 10;

        resetBall(ball);

      });
    },

    draw: function() {
      _.each(balls, function(ball){
        ball.draw();
      });
    },
  };

  function resetBall(ball) {
    var xPosition       = ball.location.x;
    var yPosition       = ball.location.y;
    var radius          = ball.radius;
    var offScreenTop    = -radius;
    var offScreenLeft   = -radius;
    var offScreenRight  = GLB.canvas.width + radius;
    var offScreenBottom = GLB.canvas.height + radius;

    if (
      xPosition > offScreenRight
      || xPosition < offScreenLeft
      || yPosition > offScreenBottom
      || yPosition < offScreenTop
      || ball.actualPosition.z <= 0
    ){
      ball.actualPosition.x = _.random(-25, 25);
      ball.actualPosition.y = _.random(-25, 25);
      ball.actualPosition.z = maxDepth;
      ball.radius = 0;
    }
  }

})();
