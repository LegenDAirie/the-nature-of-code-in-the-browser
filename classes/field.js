'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var isInsideField =  function(self, object){
    var leftSide = self.TopLeftX - object.radius;
    var rightSide = self.bottomRightX + object.radius;
    var topSide = self.TopLeftY - object.radius;
    var bottomSide = self.bottomRightY + object.radius;

    var betweenLeftAndRight = _.inRange(object.location.x, leftSide, rightSide);
    var betweenTopAndBottom = _.inRange(object.location.y, topSide, bottomSide);

    return betweenLeftAndRight && betweenTopAndBottom
  };

  var calculateForceMagnitude = function(self, object){
    var speedOfObject = object.velocity.magnitude();
    var fieldForceMagnitude = self.coefficient * speedOfObject * speedOfObject;

    return fieldForceMagnitude
  };

  var calculateForceDirection = function(object){
    var direction = object.velocity.returnNegativeCopy();
    direction = direction.normalize();

    return direction
  };

  var FIELD_PROTOTYPE = {
    draw: function(){
      GLB.Draw.rectangle({
        startX: this.TopLeftX,
        startY: this.TopLeftY,
        endX: this.bottomRightX,
        endY: this.bottomRightY,
        color: this.color,
      });
    },

    calculateForce: function({ object }){
      var self = this;
      if (isInsideField(self, object)){
        var forceMagnitude = calculateForceMagnitude(self, object);
        var forceDirection = calculateForceDirection(object);
        var fieldForce = forceDirection.multiply(forceMagnitude);

        return fieldForce
      } else {
        return GLB.Vector.create({x: 0, y: 0});
      }
    },

  };

  GLB.Field = {
    create: function({ TopLeftX, TopLeftY, bottomRightX, bottomRightY, color, coefficient }){
      var field = Object.create(FIELD_PROTOTYPE);

      field.TopLeftX     = TopLeftX;
      field.TopLeftY     = TopLeftY;
      field.bottomRightX = bottomRightX;
      field.bottomRightY = bottomRightY;
      field.coefficient  = coefficient;

      //doesnt work if r, g, b or a is 0
      var r = color && color.r || Math.floor(Math.random() * 255);
      var g = color && color.g || Math.floor(Math.random() * 255);
      var b = color && color.b || Math.floor(Math.random() * 255);
      var a = color && color.a || 0.2;

      field.color = `rgba(${r}, ${g}, ${b}, ${a})`

      return field;
    }
  }

})();
