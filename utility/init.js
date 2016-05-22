'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var simulation = GLB.Simulation.create(GLB.simulationLogic);

  simulation.start();
})();
