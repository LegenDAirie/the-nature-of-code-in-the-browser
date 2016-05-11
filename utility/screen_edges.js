'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var Screen_edges = function() {

    var tooFarRight = function(object) {
      return object.location.x > object.radius + window.innerWidth
    }

    var tooFarLeft = function(object) {
      return object.location.x < -object.radius
    }

    var tooFarDown = function(object) {
      return object.location.y > object.radius + window.innerHeight
    }

    var tooFarUp = function(object) {
      return object.location.y < -object.radius
    }

    var wrap_around_screen = function(object) {

      if (tooFarRight(object)) {
        object.location.x = -object.radius
      } else if (tooFarLeft(object)) {
        object.location.x = object.radius + window.innerWidth
      }

      if (tooFarDown(object)) {
        object.location.y = -object.radius
      } else if (tooFarUp(object)) {
        object.location.y = object.radius + window.innerHeight
      }
    }

    var reflective_edges = function(object) {

    }

    return {
      wrap_around_screen: wrap_around_screen,
      reflective_edges: reflective_edges
    }
    
  }

  GLB.Screen_edges = Screen_edges();
})();
