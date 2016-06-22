'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var Screen_edges = function(){

    var wrap_around_screen = function(object) {
      var xPosition       = object.location.x;
      var yPosition       = object.location.y;
      var radius          = object.radius;
      var offScreenTop    = -radius;
      var offScreenLeft   = -radius;
      var offScreenRight  = GLB.canvas.width + radius;
      var offScreenBottom = GLB.canvas.height + radius;

      //right edge
      if (xPosition > offScreenRight){
        object.location.x = offScreenLeft;
      }
      //left edge
      if (xPosition < offScreenLeft){
        object.location.x = offScreenRight;
      }
      //bottom edge
      if (yPosition > offScreenBottom){
        object.location.y = offScreenTop;
      }
      //top edge
      if (yPosition < offScreenTop){
        object.location.y = offScreenBottom;
      }
    }

    var reflect_off_edges = function(object){
      var xPosition     = object.location.x;
      var yPosition     = object.location.y;
      var radius        = object.radius;
      var topBarrier    = radius;
      var leftBarrier   = radius;
      var rightBarrier  = GLB.canvas.width - radius;
      var bottomBarrier = GLB.canvas.height - radius;

      //right edge
      if (xPosition > rightBarrier){
        object.location.x = rightBarrier;
        object.velocity.x = -object.velocity.x;
      }
      //left edge
      if (xPosition < leftBarrier){
        object.location.x = leftBarrier;
        object.velocity.x = -object.velocity.x;
      }
      //bottom edge
      if (yPosition > bottomBarrier){
        object.location.y = bottomBarrier;
        object.velocity.y = -object.velocity.y;
      }
      //top edge
      if (yPosition < topBarrier){
        object.location.y = topBarrier;
        object.velocity.y = -object.velocity.y;
      }
    }

    return{
      wrap_around_screen: wrap_around_screen,
      reflect_off_edges: reflect_off_edges
    }

  }

  GLB.Screen_edges = Screen_edges();
})();
