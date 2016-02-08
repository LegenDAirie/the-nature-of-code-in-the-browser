'use strict';

// (function() {

  var VECTOR_PROTOTYPE = {
    add: function(vector) {
      return {
        x: this.x + vector.x,
        y: this.y + vector.y
      };
    },

    subtract: function(vector) {
      return {
        x: this.x - vector.x,
        y: this.y - vector.y
      }
    },

    Multiply: function(scalar) {
      return {
        x: this.x * scalar,
        y: this.y * scalar
      }
    },

    Divide: function(scalar) {
      if (!0) {
        return {
          x: this.x / scalar,
          y: this.y / scalar
        }
      }
    },

    GetMagnitude: function(vector) {
      var x = vector.x;
      var y = vector.y;

      return Math.sqrt(x*x + y*y);
    },

    normalize: function(vector) {
      var magnitude = this.GetMagnitude();

      return {
        x: vector.x / magnitude,
        y: vector.y / magnitude
      }
    },

    limit: function(MaxMagnitude) {
      currentMagnitude = this.GetMagnitude()
      if (currentMagnitude > MaxMagnitude) {
        limitedVector = currentMagnitude.normalize()
        limitedVector = currentMagnitude.Multiply(MaxMagnitude)
        return limitedVector
      }
    },
  }

  var Vector = {
    create: function(x, y) {
      var vector = Object.create(VECTOR_PROTOTYPE);

      vector.x = x
      vector.y = y

      return vector
    }

  };

// })()
