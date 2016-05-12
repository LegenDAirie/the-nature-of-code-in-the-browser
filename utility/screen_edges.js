'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var Screen_edges = function() {

    var tooFarRight = function(object) {
      return object.location.x > object.radius + GLB.canvas.width
    }

    var tooFarLeft = function(object) {
      return object.location.x < -object.radius
    }

    var tooFarDown = function(object) {
      return object.location.y > object.radius + GLB.canvas.height
    }

    var tooFarUp = function(object) {
      return object.location.y < -object.radius
    }

    var wrap_around_screen = function(object) {

      if (tooFarRight(object)) {
        object.location.x = -object.radius
      }

      if (tooFarLeft(object)) {
        object.location.x = object.radius + GLB.canvas.width
      }

      if (tooFarDown(object)) {
        object.location.y = -object.radius
      }

      if (tooFarUp(object)) {
        object.location.y = object.radius + GLB.canvas.height
      }
    }

    var reflective_edges = function(object) {

      if (tooFarRight(object)) {
        object.velocity.x = -object.velocity.x
      }

      if (tooFarLeft(object)) {
        object.velocity.x = -object.velocity.x
      }

      if (tooFarDown(object)) {
        object.velocity.y = -object.velocity.y
      }

      if (tooFarUp(object)) {
        object.velocity.y = -object.velocity.y
      }
    }

    return {
      wrap_around_screen: wrap_around_screen,
      reflective_edges: reflective_edges
    }

  }

  GLB.Screen_edges = Screen_edges();
})();
