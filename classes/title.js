'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var TITLE_PROTOTYPE = {
    display: function() {
      GLB.Draw.text({
        text:         this.text,
        fontSize:     "72px",
        fontFamily:   "Arial",
        textAlign:    "center",
        x:            GLB.canvas.width / 2,
        y:            GLB.canvas.height / 2,
        color:        "rgba(0, 0, 0, 0.6)",
        textBaseline: "middle"
      });
    }
  }

  GLB.Title = {
    create: function(text) {
      var title = Object.create(TITLE_PROTOTYPE);
      title.text = text;

      return title;
    }
  }
})();
