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
      this.mouseLocation = {
        x: event.x,
        y: event.y
      };
    },

    handleWindowResize: function () {
      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;

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
