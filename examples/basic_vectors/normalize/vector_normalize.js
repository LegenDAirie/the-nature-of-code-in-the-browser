'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var VECTOR_NORMALIZE_PROTOTYPE = {
    start: function () {
      setInterval(this.tick.bind(this), 1000/60);
      canvas.addEventListener("mousemove", this.updateMouseLocation.bind(this));
      window.addEventListener("resize", this.handleWindowResize)
    },

    tick: function () {
      var self = this;

      context.clearRect(0, 0, canvas.width, canvas.height);

      var mouse = self.mouseVector()
      var center = Vector.create(WIDTH / 2, HEIGHT / 2)
      var normalizedVector = mouse.subtract(center)
      // var newVector = mouse.sub

      context.translate(WIDTH / 2, HEIGHT /2)
      shapeMaker.drawLine(0, 0, normalizedVector.x, normalizedVector.y, this.black, context)
      context.translate(-WIDTH / 2, -HEIGHT /2)
    },

    updateMouseLocation: function(event) {
      this.mouseLocation = {
        x: event.x,
        y: event.y
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

  /* vector_subtraction_example CLASS" */
  var Vector_normalize_example = {
    create: function () {
      var Vector_normalize_example = Object.create(VECTOR_NORMALIZE_PROTOTYPE);

      return Vector_normalize_example;
    }
  }

// })()
