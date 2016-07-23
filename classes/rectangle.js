'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  const RECTANGLE_PROTOTYPE = {

    draw: function() {

    },

    update: function() {

    },
  };

  const GLB.Ball = {
    create: function({ x, y, radius, velocity, color }) {
      const rectangle = Object.create(RECTANGLE_PROTOTYPE);
        let location = GLB.Vector({x, y});
        // let velocity;
        // let acceleration;
        // let heading;
        // let angularVelocity;
        // let angularAcceleration;



      return rectangle;
    }
  };
})();
