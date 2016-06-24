'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var Force = function(){

    var applyNetForce = function({ object, NetForce }){
      NetForce = NetForce || GLB.Vector.create({x: 0, y: 0});

      NetForce = NetForce.divide(object.mass);
      object.acceleration = NetForce.returnNewCopy();
    };

    var calculateForce = function(forces){
      forces = forces || [];

      return _.reduce(forces, function(NetForce, force){
        return NetForce.add(force);
      });
    };

    return {
      applyNetForce: applyNetForce,
      calculateForce: calculateForce
    };
  }

  GLB.Force = Force();
})();
