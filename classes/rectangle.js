'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  const RECTANGLE_PROTOTYPE = {

    draw: function() {
      GLB.context.save();
      GLB.context.translate(this.location.x, this.location.y);
      GLB.context.rotate(this.heading);// by heading

      GLB.Draw.rectangle({
        startX: -this.width / 2,
        startY: -this.height / 2,
        endX: this.width,
        endY: this.height,
        color: this.color,
        border: true
      });

      GLB.context.restore();
    },

    update: function() {
      this.velocity = this.velocity.add(this.acceleration);
      this.location = this.location.add(this.velocity);

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

      rectangle.heading = 0;
      rectangle.angularVelocity = angularVelocity || 0;
      rectangle.angularAcceleration = 0;

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
      let width    = _.random(30, 100);
      let height    = _.random(30, 100);

      let x        = _.random(0, GLB.canvas.width);
      let y        = _.random(0, GLB.canvas.height);
      let velocity = 0;
      let angularVelocity = 0;

      return GLB.Rectangle.create({x, y, width, height, velocity, angularVelocity});
    }
  };
})();
