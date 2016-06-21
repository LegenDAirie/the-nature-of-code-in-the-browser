'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var Force = function(){

    var applyNetForce = function({ object, force }){
      force = force || GLB.Vector.create({x: 0, y: 0});

      force = force.divide(object.mass);
      object.acceleration = object.acceleration.add(force);
    };

    return {
      applyNetForce: applyNetForce
    };
  }

  GLB.Force = Force();
})();
