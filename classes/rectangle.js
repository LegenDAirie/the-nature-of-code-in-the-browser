'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  const RECTANGLE_PROTOTYPE = {

    draw: function() {

    },

    update: function() {
      this.velocity = this.velocity + this.acceleration;
      this.location = this.location + this.velocity

      this.angularVelocity = this.angularVelocity + this.angularAcceleration;
      this.heading = this.heading + this.angularVelocity;
    },
  };

  GLB.Rectangle = {
    create: function({ x, y, width, height, velocity, angularVelocity, color }) {
      const rectangle = Object.create(RECTANGLE_PROTOTYPE);
        rectangle.location = GLB.Vector.create({x, y});
        rectangle.velocity = velocity || GLB.Vector.create({});
        rectangle.acceleration = GLB.Vector.create({});
        // rectangle.heading;
        rectangle.angularVelocity = angularVelocity || GLB.Vector.create({});
        rectangle.angularAcceleration = GLB.Vector.create({});

        rectangle.width = width;
        rectangle.height = height || width;
        rectangle.mass = width * height;

        let r = color && color.r || Math.floor(Math.random() * 255);
        let g = color && color.g || Math.floor(Math.random() * 255);
        let b = color && color.b || Math.floor(Math.random() * 255);
        let a = color && color.a || 0.2;

        rectangle.color = `rgba(${r}, ${g}, ${b}, ${a})`

      return rectangle;
    },

    createRandom: function() {
      let width    = _.random(5, 30);
      let height    = _.random(5, 30);

      let x        = _.random(0, GLB.canvas.width);
      let y        = _.random(0, GLB.canvas.height);
      let velocity = GLB.Vector.createRandom();
      let angularVelocity = GLB.Vector.createRandom();

      return GLB.Rectangle.create({x, y, width, height, velocity, angularVelocity});
    }
  };
})();
