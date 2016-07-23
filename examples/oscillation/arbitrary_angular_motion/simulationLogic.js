'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  let G = 0.2; //gravitational constant

  // let squares = [];

  let attractor = GLB.Attractor.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2,
    radius: 5,
    mass: 3000,
  });

  // var ball = GLB.Ball.create({x: 100, y: 100, radius: 20, });

  // _.times(8, function(){
  //   let square = GLB.Rectangle.createRandom();
  //   square.velocity = square.velocity.multiply(1);
  //   squares.push(square);
  // });

  // const rect = GLB.Rectangle.create({
  //   x: GLB.canvas.width / 2,
  //   y: GLB.canvas.height / 2,
  //   width: 100,
  //   height: 20,
  //   velocity: GLB.Vector.create({}),
  //   angularVelocity: GLB.Vector.create({})
  // });
  const rect = GLB.Rectangle.createRandom();
  rect.angularVelocity = 0.1;

  GLB.simulationLogic = {

    update: function(){
      // _.forEach(squares, function(square){
      //
      //   let attraction = attractor.calculateForce({object: square, G});
      //
      //   GLB.Force.applyForce({object: square, force: attraction});
      //
        // square.update();
      //   square.acceleration = square.acceleration.multiply(0);
      // });
      rect.update();
    },

    draw: function(){
      // _.forEach(squares, function(square){
      //   square.draw();
      // });
      //
      // ball.draw();
      attractor.draw();
      rect.draw();
    },
  }
})();
