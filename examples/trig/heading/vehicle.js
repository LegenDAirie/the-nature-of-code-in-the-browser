// Vehicle

'use strict';

(function(){

  var GLB = window.GLB = window.GLB || {}

  var VEHICLE_PROTOTYPE = {
    move: function(cursor){
    // console.log('cursor', cursor.location);
      this.acceleration = this.calculateAcceleration(cursor)

      this.velocity.x += this.acceleration.x
      this.velocity.y += this.acceleration.y

      this.location.x += this.velocity.x
      this.location.y += this.velocity.y
    },

    draw: function(){
      GLB.context.clearRect(0,0, GLB.canvas.width, GLB.canvas.height)
      GLB.context.fillStyle = 'rgba(255, 0,0, 0.1)';

      // console.log('locaiton', this.location);
      GLB.context.fillRect(this.location.x, this.location.y, 20, 20);
      GLB.context.stroke();
    },

    calculateAcceleration: function(cursor){
      var acceleration = {
        x: cursor.location.x - this.location.x,
        y: cursor.location.y - this.location.y
      }

      acceleration.x /= 100
      acceleration.y /= 100

      return acceleration
    }
  }

  GLB.Vehicle = {
    create: function(){
      var vehicle = Object.create(VEHICLE_PROTOTYPE)
      vehicle.location = {x: 0, y: 0}
      vehicle.velocity = {x: 0, y: 0}

      return vehicle
    }
  }

})();
