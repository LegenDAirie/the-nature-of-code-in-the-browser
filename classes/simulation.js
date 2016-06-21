'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var SIMULATION_PROTOTYPE = {

    start: function(){
      var self = this;
      GLB.Draw.greyOut();

      window.addEventListener("resize", function(){
        GLB.canvas.setAttribute('width', window.innerWidth);
        GLB.canvas.setAttribute('height', window.innerHeight);
        GLB.Draw.greyOut();
      });

      GLB.canvasContainer.addEventListener('mouseover', function(){
        self.animate = true;
        GLB.title.classList.add('display-none');
        self.animateLoop();
      });

      GLB.canvasContainer.addEventListener('mouseout', function(){
        self.animate = false;
        GLB.title.classList.remove('display-none');
        GLB.Draw.greyOut();
      });

      if (this.props.init){
        this.props.init();
      };

    },

    animateLoop: function(){
      if (this.animate){
        window.requestAnimationFrame(this.animateLoop.bind(this));

        this.update();
        this.draw();
      }
    },

    update: function(){
      this.props.update.call(this);
    },

    draw: function(){
      var canvas = GLB.canvas;

      GLB.context.clearRect(0, 0, canvas.width, canvas.height);
      this.props.draw.call(this);
    }
  }

  GLB.Simulation = {
    create: function({ draw, init = null, update }){

      var simulation = Object.create(SIMULATION_PROTOTYPE);

      simulation.props              = {};
      simulation.props.draw         = draw;
      simulation.props.update       = update;
      simulation.props.init         = init;

      return simulation;
    }
  }

})();
