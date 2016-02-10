'use strict';

// (function() {

  var VECTOR_PROTOTYPE = {
    add: function(vector) {
      return Vector.create(
        this.x + vector.x,
        this.y + vector.y
      );
    },

    subtract: function(vector) {
      return Vector.create(
        this.x - vector.x,
        this.y - vector.y
      );
    },

    multiply: function(scalar) {
      return Vector.create(
        this.x * scalar,
        this.y * scalar
      );
    },

    divide: function(scalar) {
      if (!0) {
        return Vector.create(
          this.x / scalar,
          this.y / scalar
        );
      };
    },

    getMagnitude: function() {
      var x = this.x;
      var y = this.y;

      return Math.sqrt(x*x + y*y);
    },

    normalize: function() {
      var magnitude = this.getMagnitude();

      return Vector.create(
        this.x / magnitude,
        this.y / magnitude
      )
    },

    limit: function(MaxMagnitude) {
      currentMagnitude = this.getMagnitude()
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
