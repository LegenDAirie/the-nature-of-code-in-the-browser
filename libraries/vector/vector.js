'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var VECTOR_PROTOTYPE = {
    add: function(v){
      return GLB.Vector.create(this.x + v.x, this.y + v.y);
    }
  }

  GLB.Vector = {
    create: function(x, y){
      var vector = Object.create(VECTOR_PROTOTYPE);

        vector.x = x || 0;
        vector.y = y || 0;

      return vector;
    }
  }

})();
