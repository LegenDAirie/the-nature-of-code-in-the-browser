'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

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

    isInsideField: function(object){
      var leftSide = this.TopLeftX - object.radius;
      var rightSide = this.bottomRightX + object.radius;
      var topSide = this.TopLeftY - object.radius;
      var bottomSide = this.bottomRightY + object.radius;

      var betweenLeftAndRight = _.inRange(object.location.x, leftSide, rightSide);
      var betweenTopAndBottom = _.inRange(object.location.y, topSide, bottomSide);

      return betweenLeftAndRight && betweenTopAndBottom
    },

    calculateForce: function({ object }){
      if (this.isInsideField(object)){
        var forceMagnitude = this.calculateForceMagnitude(object);
        console.log(forceMagnitude)
        var forceDirection = this.calculateForceDirection(object);
        var fieldForce = forceDirection.multiply(forceMagnitude);
        // console.log(fieldForce)

        return fieldForce
      } else {
        return GLB.Vector.create({x: 0, y: 0});
      }
    },

    calculateForceMagnitude: function(object){
      var speedOfObject = object.velocity.magnitude();
      var fieldForceMagnitude = this.coefficient * speedOfObject * speedOfObject;

      return fieldForceMagnitude
    },

    calculateForceDirection: function(object){
      var direction = object.velocity.returnNegativeCopy();
      direction = direction.normalize();

      return direction
    }
  };

  GLB.Field = {
    create: function({ TopLeftX, TopLeftY, bottomRightX, bottomRightY, color, coefficient }){
      var field = Object.create(FIELD_PROTOTYPE);

      field.TopLeftX     = TopLeftX;
      field.TopLeftY     = TopLeftY;
      field.bottomRightX = bottomRightX;
      field.bottomRightY = bottomRightY;
      field.coefficient  = coefficient;

      //doesnt work if r,g,b or a is 0
      var r = color && color.r || Math.floor(Math.random() * 255);
      var g = color && color.g || Math.floor(Math.random() * 255);
      var b = color && color.b || Math.floor(Math.random() * 255);
      var a = color && color.a || 0.2;

      field.color = `rgba(${r}, ${g}, ${b}, ${a})`

      return field;
    }
  }

})();
