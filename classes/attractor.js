'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var ATTRACTOR_PROTOTYPE = {
    applyForce: function(object){
      var
    }
  };

  GLB.Attractor = {
    create: function({ x, y, radius, velocity, color, mass }){
      var color = color || { r: 1, g: 1, b: 1, a: 0.2};

      var attractor = GLB.Ball.create({x, y, radius, velocity, color});

      attractor.mass = mass || attractor.mass;

      return attractor;
    },

    createRandom: function(){
      var x        = _.random(0, GLB.canvas.width);
      var y        = _.random(0, GLB.canvas.height);
      var velocity = GLB.Vector.createRandom();
      var radius   = _.random(5, 15);
      var mass     = radius * radius * Math.PI * _.random(1, 7);

      return GLB.Attractor.create({x, y, velocity, radius, mass});
    }
  };
})();
