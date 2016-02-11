'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var ACCELERATION_PROTOTYPE = {
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

      // canvas.addEventListener("mousemove", this.updateMouseLocation.bind(this));
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

      this.ball.move(self.addGravity)
      this.ball.wrap()
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.ball.draw()
    },

    addGravity: function(event) {
      return {
        x: 0,
        y: 0.01
      }
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
  var Acceleration_example = {
    create: function () {
      var acceleration_example = Object.create(ACCELERATION_PROTOTYPE);

      acceleration_example.ball = Ball.createRandom()

      return acceleration_example;
    }
  }

// })()
