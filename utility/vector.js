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
      var vector = Object.create(VECTOR_PROTOTYPE);
      var angle1 = Math.random() * 2 * Math.PI;
      var angle2 = Math.random() * 2 * Math.PI;

      vector.x = Math.cos(angle1);
      vector.y = Math.sin(angle2);

      return vector;
    }
  }

})();
