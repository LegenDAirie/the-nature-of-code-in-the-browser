'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var STAR_FIELD_PROTOTYPE = {
    start: function () {
      var self = this;
      var animate = false;


      var radius = 1;
      var focalLength = canvas.width;

      var centerX, centerY;

      var stars = [], star;
      var i;

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

      // this.ball.move(self.addGravity)
      this.moveStars();
      // context.clearRect(0, 0, canvas.width, canvas.height);
      // this.ball.draw()
      this.drawStars();

    },

    moveStars: function (){
      for(var i = 0; i < this.numStars; i++){
        star = stars[i];
        star.z--;

        if(star.z <= 0){
          star.z = canvas.width;
        }
      }
    },

    drawStars: function (){
      var pixelX, pixelY, pixelRadius;

      // Resize to the screen
      if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
      }

      canvas.fillStyle = "black";
      // canvas.fillRect(0,0, canvas.width, canvas.height);
      canvas.fillStyle = "white";
      for(var i = 0; i < this.numStars; i++){
        star = stars[i];

        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = radius * (focalLength / star.z);

        canvas.beginPath();
        canvas.arc(pixelX, pixelY, pixelRadius, 0, 2 * Math.PI);
        canvas.fill();
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

  /* starField CLASS" */
  var StarField = {
    create: function () {
      var starField = Object.create(STAR_FIELD_PROTOTYPE);

      var numStars = 1000;

      starField.stars = [];
      for(var i = 0; i < numStars; i++){
        var star = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width
        };
        starField.stars.push(star);
      }

      return starField;
    }
  }

// })()
