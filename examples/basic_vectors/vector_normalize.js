'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var VECTOR_NORMALIZE_PROTOTYPE = {
    start: function () {
      setInterval(this.tick.bind(this), 1000/60);
      canvas2.addEventListener("mousemove", runExamples.updateMouseLocation.bind(this));
      window.addEventListener("resize", this.handleWindowResize)
    },

    tick: function () {
      var self = this;

      context2.clearRect(0, 0, canvas2.width, canvas2.height);

      var mouse = self.mouseVector()
      var center = Vector.create(WIDTH / 2, HEIGHT / 2)
      var normalizedVector = mouse.subtract(center)
      // var newVector = mouse.sub

      context2.translate(WIDTH / 2, HEIGHT /2)
      shapeMaker.drawLine(0, 0, normalizedVector.x, normalizedVector.y, this.black, context2)
      context2.translate(-WIDTH / 2, -HEIGHT /2)
    },

    // updateMouseLocation: function(event) {
    //   this.mouseLocation = {
    //     x: event.x,
    //     y: event.y
    //   };
    // },

    mouseVector: function () {
      if (!this.mouseLocation) { return Vector.create(0, 0) }

      return Vector.create(this.mouseLocation.x, this.mouseLocation.y)
    },

    // handleWindowResize: function () {
    //   WIDTH = window.innerWidth;
    //   HEIGHT = window.innerHeight;
    //
    //   canvas2.setAttribute('height', HEIGHT);
    //   canvas2.setAttribute('width', WIDTH);
    // }
  }

  /* vector_subtraction_example CLASS" */
  var Vector_normalize_example = {
    create: function () {
      var Vector_normalize_example = Object.create(VECTOR_NORMALIZE_PROTOTYPE);

      return Vector_normalize_example;
    }
  }

// })()
