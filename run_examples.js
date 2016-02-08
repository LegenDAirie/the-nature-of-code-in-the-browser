'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var RUN_EXAMPLES_PROTOTYPE = {
    start: function () {
      // setInterval(this.tick.bind(this), 1000/60);
      canvas.addEventListener("mousemove", this.updateMouseLocation.bind(this));
      window.addEventListener("resize", this.handleWindowResize)

      var vector_subtraction_example = Vector_subtraction_example.create()
      vector_subtraction_example.start()
    },

    // tick: function () {
    //
    // },

    updateMouseLocation: function(event) {
      var rect = canvas.getBoundingClientRect();

      this.mouseLocation = {
        x: Math.round((event.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
        y: Math.round((event.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
        // x: event.x,
        // y: event.y
      };
    },

    handleWindowResize: function () {
      WIDTH = window.innerWidth / 2;
      HEIGHT = window.innerHeight / 2;

      canvas.setAttribute('height', HEIGHT);
      canvas.setAttribute('width', WIDTH);
    }
  }

  /* runExamples CLASS" */
  var RunExamples = {
    create: function () {
      var runExamples = Object.create(RUN_EXAMPLES_PROTOTYPE);

      return runExamples;
    }
  }

// })()
