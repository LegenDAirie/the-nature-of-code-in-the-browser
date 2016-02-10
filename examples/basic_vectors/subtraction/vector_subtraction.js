'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var VECTOR_SUBTRACTION_EXAMPLE_PROTOTYPE = {
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
      var subtractedVector = mouse.subtract(center)

      context.translate(WIDTH / 2, HEIGHT /2)
      shapeMaker.drawLine(0, 0, subtractedVector.x, subtractedVector.y, this.black, context)
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
  var Vector_subtraction_example = {
    create: function () {
      var vector_subtraction_example = Object.create(VECTOR_SUBTRACTION_EXAMPLE_PROTOTYPE);

      return vector_subtraction_example;
    }
  }

// })()
