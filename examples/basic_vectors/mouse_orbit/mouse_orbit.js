'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var MOUSE_ORBIT_EXAMPLE_PROTOTYPE = {
    start: function () {
      var self = this;
      var animate = false;

      window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function( callback ){
                  window.setTimeout(callback, 1000 / 60);
                };
      })();

      // animation loop
      function animloop(){
        if (animate)
        requestAnimFrame(animloop);
        self.tick()
      };

      canvas.addEventListener("mousemove", this.updateMouseLocation.bind(this));
      window.addEventListener("resize", this.handleWindowResize)

      // starts the animation when the mouse enters the window
      canvas.addEventListener('mouseover', function(event){
        animate = true;
        animloop();
      });

      // stops the animation when the mouse leaves the window
      canvas.addEventListener("mouseout",function(event){
        animate = false;
      });
    },

    tick: function () {
      var self = this;

      context.clearRect(0, 0, canvas.width, canvas.height);
      this.balls.forEach(function (ball) {
        ball.move(self.gravitationalAccelerationForLocation.bind(self));
        ball.draw();
      })

    },

    updateMouseLocation: function(event) {
      this.mouseLocation = {
        x: event.x,
        y: event.y
      };
    },

    gravitationalAccelerationForLocation: function (location) {
      if (!this.mouseLocation) { return {x: 0, y: 0} }

      var dx = this.mouseLocation.x - location.x;
      var dy = this.mouseLocation.y - location.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      var direction = {
        x: dx / distance,
        y: dy / distance
      };

      var magnitude;
      if (distance > 10) {
        magnitude = 0.1;
      } else {
        magnitude = 0;
      }

      return {
        x: magnitude * direction.x,
        y: magnitude * direction.y
      };
    },


    mouseVector: function () {
      if (!this.mouseLocation) { return Vector.create(0, 0) }

      return Vector.create(this.mouseLocation.x, this.mouseLocation.y)
    },

    handleWindowResize: function () {
      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;

      canvas.setAttribute('height', HEIGHT);
      canvas.setAttribute('width', WIDTH);
    }
  }

  /* acceleration_example CLASS" */
  var MouseOrbitExample = {
    create: function () {
      var mouseOrbitExample = Object.create(MOUSE_ORBIT_EXAMPLE_PROTOTYPE);

      mouseOrbitExample.balls = []
      for (var i = 0; i < 5; i ++) {
        mouseOrbitExample.balls[i] = Ball.createRandom()
      }

      return mouseOrbitExample;
    }
  }

// })()
