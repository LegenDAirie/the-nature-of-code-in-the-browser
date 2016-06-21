'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  GLB.Force = function(){

    var applyNetForce = function(object, force){
      force = force.divide(object.mass);
      var acceleration = object.acceleration.add(force);

      return acceleration;
    };

    return {
      applyForce: applyForce
    };
  }
})();
