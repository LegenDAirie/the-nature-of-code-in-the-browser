// cursor.js

'use strict';

( function() {
  var GLB = window.GLB = window.GLB || {}

  var CURSOR_PROTOTYE = {
    updateMouse: function(event) {
      this.location = {
        x: event.x,
        y: event.y
      }
      console.log(this.location)
    }
  }

  GLB.Cursor = {
    create: function() {
      var cursor = Object.create(CURSOR_PROTOTYE)

      cursor.location = {
        x: 0,
        y: 0
      }

      return cursor;
    }
  }

})()
