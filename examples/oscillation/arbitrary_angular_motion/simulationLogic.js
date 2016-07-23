'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  let G = 0.2; //gravitational constant

  let squares = [];

  let attractor = GLB.Attractor.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2,
    radius: 5,
    mass: 3000,
  });

  _.times(8, function(){
    let square = GLB.Rectangle.createRandom();
    square.velocity = square.velocity.multiply(1);
    squares.push(square);
  });

  GLB.simulationLogic = {

    update: function(){
      // _.forEach(squares, function(square){
      //
      //   let attraction = attractor.calculateForce({object: square, G});
      //
      //   GLB.Force.applyForce({object: square, force: attraction});
      //
      //   square.update();
      //   square.acceleration = square.acceleration.multiply(0);
      // });
    },

    draw: function(){
      // _.forEach(squares, function(square){
      //   square.draw();
      // });
      //
      // attractor.draw();
    },
  }
})();
