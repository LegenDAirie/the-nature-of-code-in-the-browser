'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var SIMULATION_PROTOTYPE = {

    start: function(){
      var self = this;
      window.addEventListener("resize", this.resizeCanvas);

      GLB.canvas.addEventListener('mouseover', function(){
        self.animate = true;
        self.animateLoop();
      });
      GLB.canvas.addEventListener('mouseout', function(){
        self.animate = false;
      });

    },

    animateLoop: function(){
      if (this.animate){
        window.requestAnimationFrame(this.animateLoop.bind(this));
        this.update();
      }
    },

    update: function(){
    },

    draw: function(){

    },

    resizeCanvas: function(){
      GLB.canvas.setAttribute('width', window.innerWidth)
      GLB.canvas.setAttribute('height', window.innerHeight)
    }

  }

  GLB.Simulation = {
    create: function(){
      var simulation = Object.create(SIMULATION_PROTOTYPE);

      return simulation;
    }
  }

})();
