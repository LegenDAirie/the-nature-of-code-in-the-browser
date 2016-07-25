'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  const balls = [];

  let angle = 0;
  let angleVelocity = 0.01;

  _.times(10, function() {
    let ball = GLB.Ball.create({
      radius: 15,
      });


  });

  GLB.simulationLogic = {

    update: function() {

    },

    draw: function() {

    },
  };
})();
