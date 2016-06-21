'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var VECTOR_PROTOTYPE = {
    add: function(v){
      return GLB.Vector.create({
        x: this.x + v.x,
        y: this.y + v.y
      });
    },

    subtract: function(v){
      return GLB.Vector.create({
        x: this.x - v.x,
        y: this.y - v.y
      });
    },

    multiply: function(number){
      return GLB.Vector.create({
        x: this.x * number,
        y: this.y * number
      });
    },

    magnitude: function(){
      return Math.sqrt(this.x * this.x + this.y * this.y)
    },

    divide: function(number){
      if (number !== 0){
        return GLB.Vector.create({
          x: this.x / number,
          y: this.y / number
        });
      };
    },

    normalize: function(){
      return this.divide(this.magnitude());
    },

    setMagnitude: function(magnitude){
      return this.normalize().multiply(magnitude);
    },

    limit: function(maxMagnitude){
      if (this.magnitude() > maxMagnitude){
        return this.setMagnitude(maxMagnitude);
      } else {
        return this;
      }
    }
  };

  GLB.Vector = {
    create: function({ x, y }) {
      var vector = Object.create(VECTOR_PROTOTYPE);

        vector.x = x || 0;
        vector.y = y || 0;

      return vector;
    },

    createRandom: function() {
      var angle1 = Math.random() * 2 * Math.PI;

      var x = Math.cos(angle1);
      var y = Math.sin(angle1);

      return GLB.Vector.create({x, y});
    }
  }

})();
