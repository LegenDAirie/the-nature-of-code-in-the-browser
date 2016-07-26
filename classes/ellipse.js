'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  const ELLIPSE_PROTOTYPE = {

    draw: function() {
      GLB.context.save();
      GLB.context.translate(this.location.x, this.location.y);
      GLB.context.rotate(this.heading.toAngle());

      GLB.Draw.ellipse({
        radiusX: this.majorAxis,
        radiusY: this.minorAxis,
        color: this.color
      });

      GLB.context.restore();
    },

    update: function() {
      this.velocity = this.velocity.add(this.acceleration);
      this.location = this.location.add(this.velocity);

      this.angularVelocity = this.angularVelocity + this.angularAcceleration;
      this.calcHeading();
    },

    calcHeading: function () {
      let angle = this.heading.toAngle() + this.angularVelocity;
      this.heading = GLB.Vector.create({x: Math.cos(angle), y: Math.sin(angle)});
    }
  };

  GLB.Ellipse = {
    create: function({ x, y, majorAxis, minorAxis, velocity, angularVelocity, color }) {
      const ellipse = Object.create(ELLIPSE_PROTOTYPE);

      ellipse.location = GLB.Vector.create({x, y});
      ellipse.velocity = velocity || GLB.Vector.create({});
      ellipse.acceleration = GLB.Vector.create({});

      ellipse.heading = GLB.Vector.create({x: 0, y: 1});
      ellipse.angularVelocity = angularVelocity || 0;
      ellipse.angularAcceleration = 0;

      ellipse.majorAxis = majorAxis;
      ellipse.minorAxis = minorAxis || majorAxis;
      ellipse.mass = majorAxis * minorAxis;

      ellipse.radius = majorAxis;

      let r = color && color.r || Math.floor(Math.random() * 255);
      let g = color && color.g || Math.floor(Math.random() * 255);
      let b = color && color.b || Math.floor(Math.random() * 255);
      let a = color && color.a || 0.2;

      ellipse.color = `rgba(${r}, ${g}, ${b}, ${a})`

      return ellipse;
    },

    createRandom: function() {
      let majorAxis    = _.random(15, 50);
      let minorAxis    = _.random(15, 50);

      let x        = _.random(0, GLB.canvas.width);
      let y        = _.random(0, GLB.canvas.height);
      let velocity = GLB.Vector.createRandom();
      let angularVelocity = GLB.Vector.createRandom();

      return GLB.Ellipse.create({x, y, majorAxis, minorAxis, velocity, angularVelocity});
    }
  };
})();
